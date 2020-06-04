import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Linking } from 'react-native';

import { Icons } from '../../../assets';
import { Typography } from '../../../components/Typography';
import { Colors as AssessmentColors } from '../constants';
import AssessmentEnd, { assessmentStyles } from './AssessmentEnd';

/** @type {React.FunctionComponent<{}>} */
const AssessmentEndEmergency = () => {
  let { t } = useTranslation();
  return (
    <AssessmentEnd
      ctaAction={() => {
        // TODO: This would need to be localized per country
        Linking.openURL('tel:911');
      }}
      ctaColor={AssessmentColors.DANGER}
      icon={Icons.SelfAssessment}
      ctaTitle={t('assessment.emergency_cta')}
      description={
        <Trans t={t} i18nKey='assessment.emergency_description'>
          <Typography />
          <Typography style={assessmentStyles.boldBlackText} />
        </Trans>
      }
      title={t('assessment.emergency_title')}
    />
  );
};

export default AssessmentEndEmergency;
