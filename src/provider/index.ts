/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MongodbatlasProviderConfig {
  /**
  * AWS API Access Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.0/docs#aws_access_key_id MongodbatlasProvider#aws_access_key_id}
  */
  readonly awsAccessKeyId?: string;
  /**
  * AWS API Access Secret Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.0/docs#aws_secret_access_key MongodbatlasProvider#aws_secret_access_key}
  */
  readonly awsSecretAccessKey?: string;
  /**
  * AWS Security Token Service provided session token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.0/docs#aws_session_token MongodbatlasProvider#aws_session_token}
  */
  readonly awsSessionToken?: string;
  /**
  * MongoDB Atlas Base URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.0/docs#base_url MongodbatlasProvider#base_url}
  */
  readonly baseUrl?: string;
  /**
  * MongoDB Atlas Base URL default to gov
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.0/docs#is_mongodbgov_cloud MongodbatlasProvider#is_mongodbgov_cloud}
  */
  readonly isMongodbgovCloud?: boolean | cdktf.IResolvable;
  /**
  * MongoDB Atlas Programmatic Private Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.0/docs#private_key MongodbatlasProvider#private_key}
  */
  readonly privateKey?: string;
  /**
  * MongoDB Atlas Programmatic Public Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.0/docs#public_key MongodbatlasProvider#public_key}
  */
  readonly publicKey?: string;
  /**
  * MongoDB Realm Base URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.0/docs#realm_base_url MongodbatlasProvider#realm_base_url}
  */
  readonly realmBaseUrl?: string;
  /**
  * Region where secret is stored as part of AWS Secret Manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.0/docs#region MongodbatlasProvider#region}
  */
  readonly region?: string;
  /**
  * Name of secret stored in AWS Secret Manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.0/docs#secret_name MongodbatlasProvider#secret_name}
  */
  readonly secretName?: string;
  /**
  * AWS Security Token Service endpoint. Required for cross-AWS region or cross-AWS account secrets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.0/docs#sts_endpoint MongodbatlasProvider#sts_endpoint}
  */
  readonly stsEndpoint?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.0/docs#alias MongodbatlasProvider#alias}
  */
  readonly alias?: string;
  /**
  * assume_role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.0/docs#assume_role MongodbatlasProvider#assume_role}
  */
  readonly assumeRole?: MongodbatlasProviderAssumeRole[] | cdktf.IResolvable;
}
export interface MongodbatlasProviderAssumeRole {
  /**
  * The duration, between 15 minutes and 12 hours, of the role session. Valid time units are ns, us (or µs), ms, s, h, or m.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.0/docs#duration MongodbatlasProvider#duration}
  */
  readonly duration?: string;
  /**
  * A unique identifier that might be required when you assume a role in another account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.0/docs#external_id MongodbatlasProvider#external_id}
  */
  readonly externalId?: string;
  /**
  * IAM Policy JSON describing further restricting permissions for the IAM Role being assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.0/docs#policy MongodbatlasProvider#policy}
  */
  readonly policy?: string;
  /**
  * Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.0/docs#policy_arns MongodbatlasProvider#policy_arns}
  */
  readonly policyArns?: string[];
  /**
  * Amazon Resource Name (ARN) of an IAM Role to assume prior to making API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.0/docs#role_arn MongodbatlasProvider#role_arn}
  */
  readonly roleArn?: string;
  /**
  * An identifier for the assumed role session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.0/docs#session_name MongodbatlasProvider#session_name}
  */
  readonly sessionName?: string;
  /**
  * Source identity specified by the principal assuming the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.0/docs#source_identity MongodbatlasProvider#source_identity}
  */
  readonly sourceIdentity?: string;
  /**
  * Assume role session tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.0/docs#tags MongodbatlasProvider#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Assume role session tag keys to pass to any subsequent sessions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.0/docs#transitive_tag_keys MongodbatlasProvider#transitive_tag_keys}
  */
  readonly transitiveTagKeys?: string[];
}

export function mongodbatlasProviderAssumeRoleToTerraform(struct?: MongodbatlasProviderAssumeRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    external_id: cdktf.stringToTerraform(struct!.externalId),
    policy: cdktf.stringToTerraform(struct!.policy),
    policy_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.policyArns),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    session_name: cdktf.stringToTerraform(struct!.sessionName),
    source_identity: cdktf.stringToTerraform(struct!.sourceIdentity),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    transitive_tag_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transitiveTagKeys),
  }
}


/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.0/docs mongodbatlas}
*/
export class MongodbatlasProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MongodbatlasProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MongodbatlasProvider to import
  * @param importFromId The id of the existing MongodbatlasProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MongodbatlasProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.0/docs mongodbatlas} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MongodbatlasProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: MongodbatlasProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.13.0',
        providerVersionConstraint: '~> 1.8'
      },
      terraformProviderSource: 'mongodb/mongodbatlas'
    });
    this._awsAccessKeyId = config.awsAccessKeyId;
    this._awsSecretAccessKey = config.awsSecretAccessKey;
    this._awsSessionToken = config.awsSessionToken;
    this._baseUrl = config.baseUrl;
    this._isMongodbgovCloud = config.isMongodbgovCloud;
    this._privateKey = config.privateKey;
    this._publicKey = config.publicKey;
    this._realmBaseUrl = config.realmBaseUrl;
    this._region = config.region;
    this._secretName = config.secretName;
    this._stsEndpoint = config.stsEndpoint;
    this._alias = config.alias;
    this._assumeRole = config.assumeRole;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_access_key_id - computed: false, optional: true, required: false
  private _awsAccessKeyId?: string; 
  public get awsAccessKeyId() {
    return this._awsAccessKeyId;
  }
  public set awsAccessKeyId(value: string | undefined) {
    this._awsAccessKeyId = value;
  }
  public resetAwsAccessKeyId() {
    this._awsAccessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccessKeyIdInput() {
    return this._awsAccessKeyId;
  }

  // aws_secret_access_key - computed: false, optional: true, required: false
  private _awsSecretAccessKey?: string; 
  public get awsSecretAccessKey() {
    return this._awsSecretAccessKey;
  }
  public set awsSecretAccessKey(value: string | undefined) {
    this._awsSecretAccessKey = value;
  }
  public resetAwsSecretAccessKey() {
    this._awsSecretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretAccessKeyInput() {
    return this._awsSecretAccessKey;
  }

  // aws_session_token - computed: false, optional: true, required: false
  private _awsSessionToken?: string; 
  public get awsSessionToken() {
    return this._awsSessionToken;
  }
  public set awsSessionToken(value: string | undefined) {
    this._awsSessionToken = value;
  }
  public resetAwsSessionToken() {
    this._awsSessionToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSessionTokenInput() {
    return this._awsSessionToken;
  }

  // base_url - computed: false, optional: true, required: false
  private _baseUrl?: string; 
  public get baseUrl() {
    return this._baseUrl;
  }
  public set baseUrl(value: string | undefined) {
    this._baseUrl = value;
  }
  public resetBaseUrl() {
    this._baseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // is_mongodbgov_cloud - computed: false, optional: true, required: false
  private _isMongodbgovCloud?: boolean | cdktf.IResolvable; 
  public get isMongodbgovCloud() {
    return this._isMongodbgovCloud;
  }
  public set isMongodbgovCloud(value: boolean | cdktf.IResolvable | undefined) {
    this._isMongodbgovCloud = value;
  }
  public resetIsMongodbgovCloud() {
    this._isMongodbgovCloud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMongodbgovCloudInput() {
    return this._isMongodbgovCloud;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this._privateKey;
  }
  public set privateKey(value: string | undefined) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // public_key - computed: false, optional: true, required: false
  private _publicKey?: string; 
  public get publicKey() {
    return this._publicKey;
  }
  public set publicKey(value: string | undefined) {
    this._publicKey = value;
  }
  public resetPublicKey() {
    this._publicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // realm_base_url - computed: false, optional: true, required: false
  private _realmBaseUrl?: string; 
  public get realmBaseUrl() {
    return this._realmBaseUrl;
  }
  public set realmBaseUrl(value: string | undefined) {
    this._realmBaseUrl = value;
  }
  public resetRealmBaseUrl() {
    this._realmBaseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmBaseUrlInput() {
    return this._realmBaseUrl;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this._region;
  }
  public set region(value: string | undefined) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secret_name - computed: false, optional: true, required: false
  private _secretName?: string; 
  public get secretName() {
    return this._secretName;
  }
  public set secretName(value: string | undefined) {
    this._secretName = value;
  }
  public resetSecretName() {
    this._secretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }

  // sts_endpoint - computed: false, optional: true, required: false
  private _stsEndpoint?: string; 
  public get stsEndpoint() {
    return this._stsEndpoint;
  }
  public set stsEndpoint(value: string | undefined) {
    this._stsEndpoint = value;
  }
  public resetStsEndpoint() {
    this._stsEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stsEndpointInput() {
    return this._stsEndpoint;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // assume_role - computed: false, optional: true, required: false
  private _assumeRole?: MongodbatlasProviderAssumeRole[] | cdktf.IResolvable; 
  public get assumeRole() {
    return this._assumeRole;
  }
  public set assumeRole(value: MongodbatlasProviderAssumeRole[] | cdktf.IResolvable | undefined) {
    this._assumeRole = value;
  }
  public resetAssumeRole() {
    this._assumeRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleInput() {
    return this._assumeRole;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_access_key_id: cdktf.stringToTerraform(this._awsAccessKeyId),
      aws_secret_access_key: cdktf.stringToTerraform(this._awsSecretAccessKey),
      aws_session_token: cdktf.stringToTerraform(this._awsSessionToken),
      base_url: cdktf.stringToTerraform(this._baseUrl),
      is_mongodbgov_cloud: cdktf.booleanToTerraform(this._isMongodbgovCloud),
      private_key: cdktf.stringToTerraform(this._privateKey),
      public_key: cdktf.stringToTerraform(this._publicKey),
      realm_base_url: cdktf.stringToTerraform(this._realmBaseUrl),
      region: cdktf.stringToTerraform(this._region),
      secret_name: cdktf.stringToTerraform(this._secretName),
      sts_endpoint: cdktf.stringToTerraform(this._stsEndpoint),
      alias: cdktf.stringToTerraform(this._alias),
      assume_role: cdktf.listMapper(mongodbatlasProviderAssumeRoleToTerraform, true)(this._assumeRole),
    };
  }
}
