import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';

import { ContainerRepositoryStack } from '@stacks/container/container-repository-stack';

test('Elastic Container Repository Stack Created', () => {
  const app = new cdk.App();

  const containerRepositoryStack = new ContainerRepositoryStack(app);

  const template = Template.fromStack(containerRepositoryStack);

  template.resourceCountIs('AWS::ECR::Repository', 1);

  template.hasResourceProperties('AWS::ECR::Repository', {
    ImageScanningConfiguration: {
      ScanOnPush: true,
    },
    ImageTagMutability: 'IMMUTABLE',
    RepositoryName: 'chapter-nodejs',
  });
});
