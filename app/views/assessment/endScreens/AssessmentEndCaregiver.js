import React, { useContext } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import { Icons } from '../../../assets';
import { Typography } from '../../../components/Typography';
import { MetaContext } from '../AssessmentContext';
import AssessmentEnd, { assessmentStyles } from './AssessmentEnd';

/** @type {React.FunctionComponent<{}>} */
const AssessmentEndCaregiver = ({ navigation }) => {
  let { t } = useTranslation();
  let { completeRoute } = useContext(MetaContext);
  return (
    <AssessmentEnd
      ctaAction={() => {
        navigation.push(completeRoute);
      }}
      icon={Icons.SelfAssessment}
      ctaTitle={t('assessment.caregiver_cta')}
      description={
        <Trans t={t} i18nKey='assessment.caregiver_description'>
          <Typography />
          <Typography style={assessmentStyles.boldBlackText} />
        </Trans>
      }
      title={t('assessment.caregiver_title')}
    />
  );
};

export default AssessmentEndCaregiver;
