import { Stack } from 'aws-cdk-lib';
import { Construct } from 'constructs';

import { BaseEcrRepository } from '@cdk-constructs/ecr/base-ecr-repository';

export class ContainerRepositoryStack extends Stack {
  private ecrRepository: BaseEcrRepository;

  constructor(scope: Construct) {
    const stackName = 'chapter-nodejs-ecr-stack';

    super(scope, stackName, { stackName });

    const name = 'chapter-nodejs';

    this.ecrRepository = new BaseEcrRepository(this, { name });
  }
}
