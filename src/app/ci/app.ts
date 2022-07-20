#!/usr/bin/env node

import { App } from 'aws-cdk-lib';

import { ContainerRepositoryStack } from '@stacks/container/container-repository-stack';

const app = new App();

const containerRepositoryStack = new ContainerRepositoryStack(app);

app.synth();
