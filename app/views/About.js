import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableWithoutFeedback,
} from 'react-native';

import { useStrategyContent } from '../TracingStrategyContext';
import packageJson from '../../package.json';
import { Typography } from '../components';

import { useDispatch } from 'react-redux';
import toggleAllowFeatureFlagsAction from '../store/actions/featureFlags/toggleAllowFeatureFlagsEnabledAction';
import { Colors, Spacing, Typography as TypographyStyles } from '../styles';

const CLICKS_TO_ENABLE_FEATURE_FLAGS = 10;

export const AboutScreen = () => {
  const dispatch = useDispatch();

  const [clickCount, setClickCount] = useState(0);
  useEffect(() => {
    if (clickCount === CLICKS_TO_ENABLE_FEATURE_FLAGS) {
      Alert.alert('Feature Flags Enabled!');
      dispatch(toggleAllowFeatureFlagsAction({ overrideValue: true }));
    }
  }, [clickCount, dispatch]);

  const incrementClickCount = () => setClickCount(clickCount + 1);

  const { t } = useTranslation();
  const { StrategyCopy } = useStrategyContent();

  return (
    <ScrollView
      contentContainerStyle={styles.contentContainer}
      alwaysBounceVertical={false}>
      <TouchableWithoutFeedback onPress={incrementClickCount}>
        <View>
          <Typography use='headline2' style={styles.heading}>
            {StrategyCopy.aboutHeader}
          </Typography>
        </View>
      </TouchableWithoutFeedback>
      <Typography use='body2'>{t('label.about_para')}</Typography>
      <Typography
        style={styles.hyperlink}
        onPress={() => {
          Linking.openURL('https://pathcheck.org/');
        }}>
        <Text>{'pathcheck.org'}</Text>
      </Typography>

      <View style={styles.rowContainer}>
        <View style={styles.row}>
          <Typography style={styles.aboutSectionParaLabel}>
            {t('about.version')}
          </Typography>

          <Typography style={styles.aboutSectionParaContent}>
            {packageJson.version}
          </Typography>
        </View>
        <View style={styles.row}>
          <Typography style={styles.aboutSectionParaLabel}>
            {t('about.operating_system_abbr')}
          </Typography>
          <Typography style={styles.aboutSectionParaContent}>
            {Platform.OS + ' v' + Platform.Version}
          </Typography>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: Colors.primaryBackground,
    paddingHorizontal: Spacing.medium,
    paddingTop: Spacing.huge,
  },
  heading: {
    marginBottom: Spacing.small,
  },
  hyperlink: {
    color: Colors.linkText,
    textDecorationLine: 'underline',
  },
  aboutSectionParaLabel: {
    ...TypographyStyles.header5,
    width: Spacing.xxxHuge * 2,
    marginTop: Spacing.small,
  },
  aboutSectionParaContent: {
    ...TypographyStyles.mainContent,
    marginTop: Spacing.small,
  },
  rowContainer: {
    marginTop: Spacing.medium,
  },
  row: {
    flexDirection: 'row',
  },
});

export default AboutScreen;
