import { aws_ecr as ecr, RemovalPolicy } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export interface BaseEcrRepositoryProps {
  readonly name: string;
}

export class BaseEcrRepository extends ecr.Repository {
  constructor(scope: Construct, props: BaseEcrRepositoryProps) {
    super(scope, `ecr-repository-${props.name}`, {
      repositoryName: props.name,
      removalPolicy: RemovalPolicy.DESTROY,
      imageScanOnPush: true,
      imageTagMutability: ecr.TagMutability.IMMUTABLE,
    });
  }
}
