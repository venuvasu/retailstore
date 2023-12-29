import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import * as cognito from 'aws-cdk-lib/aws-cognito';
import { LocationMapStack } from './custom/maps/resource';



const backend = defineBackend({
  auth,
  data,
});

const userPoolId = backend.auth.resources.userPool.userPoolId;
const authGroupStack = backend.createStack('AuthGroupStack');
const adminGroup = new cognito.CfnUserPoolGroup(authGroupStack, 'AdminGroup', {
  userPoolId,
  groupName: 'Admin',
  description: 'Admin group',
});

new LocationMapStack(
  backend.createStack('LocationMapStack'),
  'myLocationResource',
  {}
);