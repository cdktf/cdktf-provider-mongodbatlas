/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/encryption_at_rest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EncryptionAtRestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique 24-hexadecimal digit string that identifies your project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/encryption_at_rest#project_id EncryptionAtRest#project_id}
  */
  readonly projectId: string;
  /**
  * aws_kms_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/encryption_at_rest#aws_kms_config EncryptionAtRest#aws_kms_config}
  */
  readonly awsKmsConfig?: EncryptionAtRestAwsKmsConfig[] | cdktf.IResolvable;
  /**
  * azure_key_vault_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/encryption_at_rest#azure_key_vault_config EncryptionAtRest#azure_key_vault_config}
  */
  readonly azureKeyVaultConfig?: EncryptionAtRestAzureKeyVaultConfig[] | cdktf.IResolvable;
  /**
  * google_cloud_kms_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/encryption_at_rest#google_cloud_kms_config EncryptionAtRest#google_cloud_kms_config}
  */
  readonly googleCloudKmsConfig?: EncryptionAtRestGoogleCloudKmsConfig[] | cdktf.IResolvable;
}
export interface EncryptionAtRestAwsKmsConfig {
  /**
  * Unique alphanumeric string that identifies an Identity and Access Management (IAM) access key with permissions required to access your Amazon Web Services (AWS) Customer Master Key (CMK).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/encryption_at_rest#access_key_id EncryptionAtRest#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * Unique alphanumeric string that identifies the Amazon Web Services (AWS) Customer Master Key (CMK) you used to encrypt and decrypt the MongoDB master keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/encryption_at_rest#customer_master_key_id EncryptionAtRest#customer_master_key_id}
  */
  readonly customerMasterKeyId?: string;
  /**
  * Flag that indicates whether someone enabled encryption at rest for the specified project through Amazon Web Services (AWS) Key Management Service (KMS). To disable encryption at rest using customer key management and remove the configuration details, pass only this parameter with a value of `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/encryption_at_rest#enabled EncryptionAtRest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Physical location where MongoDB Atlas deploys your AWS-hosted MongoDB cluster nodes. The region you choose can affect network latency for clients accessing your databases. When MongoDB Cloud deploys a dedicated cluster, it checks if a VPC or VPC connection exists for that provider and region. If not, MongoDB Atlas creates them as part of the deployment. MongoDB Atlas assigns the VPC a CIDR block. To limit a new VPC peering connection to one CIDR block and region, create the connection first. Deploy the cluster after the connection starts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/encryption_at_rest#region EncryptionAtRest#region}
  */
  readonly region?: string;
  /**
  * Enable connection to your Amazon Web Services (AWS) Key Management Service (KMS) over private networking.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/encryption_at_rest#require_private_networking EncryptionAtRest#require_private_networking}
  */
  readonly requirePrivateNetworking?: boolean | cdktf.IResolvable;
  /**
  * Unique 24-hexadecimal digit string that identifies an Amazon Web Services (AWS) Identity and Access Management (IAM) role. This IAM role has the permissions required to manage your AWS customer master key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/encryption_at_rest#role_id EncryptionAtRest#role_id}
  */
  readonly roleId?: string;
  /**
  * Human-readable label of the Identity and Access Management (IAM) secret access key with permissions required to access your Amazon Web Services (AWS) customer master key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/encryption_at_rest#secret_access_key EncryptionAtRest#secret_access_key}
  */
  readonly secretAccessKey?: string;
}

export function encryptionAtRestAwsKmsConfigToTerraform(struct?: EncryptionAtRestAwsKmsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    customer_master_key_id: cdktf.stringToTerraform(struct!.customerMasterKeyId),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    region: cdktf.stringToTerraform(struct!.region),
    require_private_networking: cdktf.booleanToTerraform(struct!.requirePrivateNetworking),
    role_id: cdktf.stringToTerraform(struct!.roleId),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
  }
}


export function encryptionAtRestAwsKmsConfigToHclTerraform(struct?: EncryptionAtRestAwsKmsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    customer_master_key_id: {
      value: cdktf.stringToHclTerraform(struct!.customerMasterKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    require_private_networking: {
      value: cdktf.booleanToHclTerraform(struct!.requirePrivateNetworking),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    role_id: {
      value: cdktf.stringToHclTerraform(struct!.roleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.secretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EncryptionAtRestAwsKmsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EncryptionAtRestAwsKmsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._customerMasterKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerMasterKeyId = this._customerMasterKeyId;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._requirePrivateNetworking !== undefined) {
      hasAnyValues = true;
      internalValueResult.requirePrivateNetworking = this._requirePrivateNetworking;
    }
    if (this._roleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleId = this._roleId;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EncryptionAtRestAwsKmsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKeyId = undefined;
      this._customerMasterKeyId = undefined;
      this._enabled = undefined;
      this._region = undefined;
      this._requirePrivateNetworking = undefined;
      this._roleId = undefined;
      this._secretAccessKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKeyId = value.accessKeyId;
      this._customerMasterKeyId = value.customerMasterKeyId;
      this._enabled = value.enabled;
      this._region = value.region;
      this._requirePrivateNetworking = value.requirePrivateNetworking;
      this._roleId = value.roleId;
      this._secretAccessKey = value.secretAccessKey;
    }
  }

  // access_key_id - computed: false, optional: true, required: false
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  public resetAccessKeyId() {
    this._accessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // customer_master_key_id - computed: false, optional: true, required: false
  private _customerMasterKeyId?: string; 
  public get customerMasterKeyId() {
    return this.getStringAttribute('customer_master_key_id');
  }
  public set customerMasterKeyId(value: string) {
    this._customerMasterKeyId = value;
  }
  public resetCustomerMasterKeyId() {
    this._customerMasterKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerMasterKeyIdInput() {
    return this._customerMasterKeyId;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // require_private_networking - computed: true, optional: true, required: false
  private _requirePrivateNetworking?: boolean | cdktf.IResolvable; 
  public get requirePrivateNetworking() {
    return this.getBooleanAttribute('require_private_networking');
  }
  public set requirePrivateNetworking(value: boolean | cdktf.IResolvable) {
    this._requirePrivateNetworking = value;
  }
  public resetRequirePrivateNetworking() {
    this._requirePrivateNetworking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirePrivateNetworkingInput() {
    return this._requirePrivateNetworking;
  }

  // role_id - computed: false, optional: true, required: false
  private _roleId?: string; 
  public get roleId() {
    return this.getStringAttribute('role_id');
  }
  public set roleId(value: string) {
    this._roleId = value;
  }
  public resetRoleId() {
    this._roleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId;
  }

  // secret_access_key - computed: false, optional: true, required: false
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  public resetSecretAccessKey() {
    this._secretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }

  // valid - computed: true, optional: false, required: false
  public get valid() {
    return this.getBooleanAttribute('valid');
  }
}

export class EncryptionAtRestAwsKmsConfigList extends cdktf.ComplexList {
  public internalValue? : EncryptionAtRestAwsKmsConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): EncryptionAtRestAwsKmsConfigOutputReference {
    return new EncryptionAtRestAwsKmsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EncryptionAtRestAzureKeyVaultConfig {
  /**
  * Azure environment in which your account credentials reside.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/encryption_at_rest#azure_environment EncryptionAtRest#azure_environment}
  */
  readonly azureEnvironment?: string;
  /**
  * Unique 36-hexadecimal character string that identifies an Azure application associated with your Azure Active Directory tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/encryption_at_rest#client_id EncryptionAtRest#client_id}
  */
  readonly clientId?: string;
  /**
  * Flag that indicates whether someone enabled encryption at rest for the specified  project. To disable encryption at rest using customer key management and remove the configuration details, pass only this parameter with a value of `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/encryption_at_rest#enabled EncryptionAtRest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Web address with a unique key that identifies for your Azure Key Vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/encryption_at_rest#key_identifier EncryptionAtRest#key_identifier}
  */
  readonly keyIdentifier?: string;
  /**
  * Unique string that identifies the Azure Key Vault that contains your key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/encryption_at_rest#key_vault_name EncryptionAtRest#key_vault_name}
  */
  readonly keyVaultName?: string;
  /**
  * Enable connection to your Azure Key Vault over private networking.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/encryption_at_rest#require_private_networking EncryptionAtRest#require_private_networking}
  */
  readonly requirePrivateNetworking?: boolean | cdktf.IResolvable;
  /**
  * Name of the Azure resource group that contains your Azure Key Vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/encryption_at_rest#resource_group_name EncryptionAtRest#resource_group_name}
  */
  readonly resourceGroupName?: string;
  /**
  * Private data that you need secured and that belongs to the specified Azure Key Vault (AKV) tenant (**azureKeyVault.tenantID**). This data can include any type of sensitive data such as passwords, database connection strings, API keys, and the like. AKV stores this information as encrypted binary data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/encryption_at_rest#secret EncryptionAtRest#secret}
  */
  readonly secret?: string;
  /**
  * Unique 36-hexadecimal character string that identifies your Azure subscription.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/encryption_at_rest#subscription_id EncryptionAtRest#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * Unique 36-hexadecimal character string that identifies the Azure Active Directory tenant within your Azure subscription.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/encryption_at_rest#tenant_id EncryptionAtRest#tenant_id}
  */
  readonly tenantId?: string;
}

export function encryptionAtRestAzureKeyVaultConfigToTerraform(struct?: EncryptionAtRestAzureKeyVaultConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_environment: cdktf.stringToTerraform(struct!.azureEnvironment),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    key_identifier: cdktf.stringToTerraform(struct!.keyIdentifier),
    key_vault_name: cdktf.stringToTerraform(struct!.keyVaultName),
    require_private_networking: cdktf.booleanToTerraform(struct!.requirePrivateNetworking),
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
    secret: cdktf.stringToTerraform(struct!.secret),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function encryptionAtRestAzureKeyVaultConfigToHclTerraform(struct?: EncryptionAtRestAzureKeyVaultConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_environment: {
      value: cdktf.stringToHclTerraform(struct!.azureEnvironment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_identifier: {
      value: cdktf.stringToHclTerraform(struct!.keyIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_vault_name: {
      value: cdktf.stringToHclTerraform(struct!.keyVaultName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    require_private_networking: {
      value: cdktf.booleanToHclTerraform(struct!.requirePrivateNetworking),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EncryptionAtRestAzureKeyVaultConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EncryptionAtRestAzureKeyVaultConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureEnvironment !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureEnvironment = this._azureEnvironment;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._keyIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyIdentifier = this._keyIdentifier;
    }
    if (this._keyVaultName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultName = this._keyVaultName;
    }
    if (this._requirePrivateNetworking !== undefined) {
      hasAnyValues = true;
      internalValueResult.requirePrivateNetworking = this._requirePrivateNetworking;
    }
    if (this._resourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupName = this._resourceGroupName;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._subscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionId = this._subscriptionId;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EncryptionAtRestAzureKeyVaultConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azureEnvironment = undefined;
      this._clientId = undefined;
      this._enabled = undefined;
      this._keyIdentifier = undefined;
      this._keyVaultName = undefined;
      this._requirePrivateNetworking = undefined;
      this._resourceGroupName = undefined;
      this._secret = undefined;
      this._subscriptionId = undefined;
      this._tenantId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azureEnvironment = value.azureEnvironment;
      this._clientId = value.clientId;
      this._enabled = value.enabled;
      this._keyIdentifier = value.keyIdentifier;
      this._keyVaultName = value.keyVaultName;
      this._requirePrivateNetworking = value.requirePrivateNetworking;
      this._resourceGroupName = value.resourceGroupName;
      this._secret = value.secret;
      this._subscriptionId = value.subscriptionId;
      this._tenantId = value.tenantId;
    }
  }

  // azure_environment - computed: false, optional: true, required: false
  private _azureEnvironment?: string; 
  public get azureEnvironment() {
    return this.getStringAttribute('azure_environment');
  }
  public set azureEnvironment(value: string) {
    this._azureEnvironment = value;
  }
  public resetAzureEnvironment() {
    this._azureEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureEnvironmentInput() {
    return this._azureEnvironment;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // key_identifier - computed: false, optional: true, required: false
  private _keyIdentifier?: string; 
  public get keyIdentifier() {
    return this.getStringAttribute('key_identifier');
  }
  public set keyIdentifier(value: string) {
    this._keyIdentifier = value;
  }
  public resetKeyIdentifier() {
    this._keyIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdentifierInput() {
    return this._keyIdentifier;
  }

  // key_vault_name - computed: false, optional: true, required: false
  private _keyVaultName?: string; 
  public get keyVaultName() {
    return this.getStringAttribute('key_vault_name');
  }
  public set keyVaultName(value: string) {
    this._keyVaultName = value;
  }
  public resetKeyVaultName() {
    this._keyVaultName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultNameInput() {
    return this._keyVaultName;
  }

  // require_private_networking - computed: true, optional: true, required: false
  private _requirePrivateNetworking?: boolean | cdktf.IResolvable; 
  public get requirePrivateNetworking() {
    return this.getBooleanAttribute('require_private_networking');
  }
  public set requirePrivateNetworking(value: boolean | cdktf.IResolvable) {
    this._requirePrivateNetworking = value;
  }
  public resetRequirePrivateNetworking() {
    this._requirePrivateNetworking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirePrivateNetworkingInput() {
    return this._requirePrivateNetworking;
  }

  // resource_group_name - computed: false, optional: true, required: false
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  public resetResourceGroupName() {
    this._resourceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // subscription_id - computed: false, optional: true, required: false
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // valid - computed: true, optional: false, required: false
  public get valid() {
    return this.getBooleanAttribute('valid');
  }
}

export class EncryptionAtRestAzureKeyVaultConfigList extends cdktf.ComplexList {
  public internalValue? : EncryptionAtRestAzureKeyVaultConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): EncryptionAtRestAzureKeyVaultConfigOutputReference {
    return new EncryptionAtRestAzureKeyVaultConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EncryptionAtRestGoogleCloudKmsConfig {
  /**
  * Flag that indicates whether someone enabled encryption at rest for the specified  project. To disable encryption at rest using customer key management and remove the configuration details, pass only this parameter with a value of `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/encryption_at_rest#enabled EncryptionAtRest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Resource path that displays the key version resource ID for your Google Cloud KMS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/encryption_at_rest#key_version_resource_id EncryptionAtRest#key_version_resource_id}
  */
  readonly keyVersionResourceId?: string;
  /**
  * JavaScript Object Notation (JSON) object that contains the Google Cloud Key Management Service (KMS). Format the JSON as a string and not as an object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/encryption_at_rest#service_account_key EncryptionAtRest#service_account_key}
  */
  readonly serviceAccountKey?: string;
}

export function encryptionAtRestGoogleCloudKmsConfigToTerraform(struct?: EncryptionAtRestGoogleCloudKmsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    key_version_resource_id: cdktf.stringToTerraform(struct!.keyVersionResourceId),
    service_account_key: cdktf.stringToTerraform(struct!.serviceAccountKey),
  }
}


export function encryptionAtRestGoogleCloudKmsConfigToHclTerraform(struct?: EncryptionAtRestGoogleCloudKmsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_version_resource_id: {
      value: cdktf.stringToHclTerraform(struct!.keyVersionResourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_key: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EncryptionAtRestGoogleCloudKmsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EncryptionAtRestGoogleCloudKmsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._keyVersionResourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVersionResourceId = this._keyVersionResourceId;
    }
    if (this._serviceAccountKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountKey = this._serviceAccountKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EncryptionAtRestGoogleCloudKmsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._keyVersionResourceId = undefined;
      this._serviceAccountKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._keyVersionResourceId = value.keyVersionResourceId;
      this._serviceAccountKey = value.serviceAccountKey;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // key_version_resource_id - computed: false, optional: true, required: false
  private _keyVersionResourceId?: string; 
  public get keyVersionResourceId() {
    return this.getStringAttribute('key_version_resource_id');
  }
  public set keyVersionResourceId(value: string) {
    this._keyVersionResourceId = value;
  }
  public resetKeyVersionResourceId() {
    this._keyVersionResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVersionResourceIdInput() {
    return this._keyVersionResourceId;
  }

  // service_account_key - computed: false, optional: true, required: false
  private _serviceAccountKey?: string; 
  public get serviceAccountKey() {
    return this.getStringAttribute('service_account_key');
  }
  public set serviceAccountKey(value: string) {
    this._serviceAccountKey = value;
  }
  public resetServiceAccountKey() {
    this._serviceAccountKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountKeyInput() {
    return this._serviceAccountKey;
  }

  // valid - computed: true, optional: false, required: false
  public get valid() {
    return this.getBooleanAttribute('valid');
  }
}

export class EncryptionAtRestGoogleCloudKmsConfigList extends cdktf.ComplexList {
  public internalValue? : EncryptionAtRestGoogleCloudKmsConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): EncryptionAtRestGoogleCloudKmsConfigOutputReference {
    return new EncryptionAtRestGoogleCloudKmsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/encryption_at_rest mongodbatlas_encryption_at_rest}
*/
export class EncryptionAtRest extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_encryption_at_rest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EncryptionAtRest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EncryptionAtRest to import
  * @param importFromId The id of the existing EncryptionAtRest that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/encryption_at_rest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EncryptionAtRest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_encryption_at_rest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/resources/encryption_at_rest mongodbatlas_encryption_at_rest} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EncryptionAtRestConfig
  */
  public constructor(scope: Construct, id: string, config: EncryptionAtRestConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_encryption_at_rest',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.31.0',
        providerVersionConstraint: '~> 1.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._projectId = config.projectId;
    this._awsKmsConfig.internalValue = config.awsKmsConfig;
    this._azureKeyVaultConfig.internalValue = config.azureKeyVaultConfig;
    this._googleCloudKmsConfig.internalValue = config.googleCloudKmsConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // aws_kms_config - computed: false, optional: true, required: false
  private _awsKmsConfig = new EncryptionAtRestAwsKmsConfigList(this, "aws_kms_config", false);
  public get awsKmsConfig() {
    return this._awsKmsConfig;
  }
  public putAwsKmsConfig(value: EncryptionAtRestAwsKmsConfig[] | cdktf.IResolvable) {
    this._awsKmsConfig.internalValue = value;
  }
  public resetAwsKmsConfig() {
    this._awsKmsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsKmsConfigInput() {
    return this._awsKmsConfig.internalValue;
  }

  // azure_key_vault_config - computed: false, optional: true, required: false
  private _azureKeyVaultConfig = new EncryptionAtRestAzureKeyVaultConfigList(this, "azure_key_vault_config", false);
  public get azureKeyVaultConfig() {
    return this._azureKeyVaultConfig;
  }
  public putAzureKeyVaultConfig(value: EncryptionAtRestAzureKeyVaultConfig[] | cdktf.IResolvable) {
    this._azureKeyVaultConfig.internalValue = value;
  }
  public resetAzureKeyVaultConfig() {
    this._azureKeyVaultConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureKeyVaultConfigInput() {
    return this._azureKeyVaultConfig.internalValue;
  }

  // google_cloud_kms_config - computed: false, optional: true, required: false
  private _googleCloudKmsConfig = new EncryptionAtRestGoogleCloudKmsConfigList(this, "google_cloud_kms_config", false);
  public get googleCloudKmsConfig() {
    return this._googleCloudKmsConfig;
  }
  public putGoogleCloudKmsConfig(value: EncryptionAtRestGoogleCloudKmsConfig[] | cdktf.IResolvable) {
    this._googleCloudKmsConfig.internalValue = value;
  }
  public resetGoogleCloudKmsConfig() {
    this._googleCloudKmsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudKmsConfigInput() {
    return this._googleCloudKmsConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      project_id: cdktf.stringToTerraform(this._projectId),
      aws_kms_config: cdktf.listMapper(encryptionAtRestAwsKmsConfigToTerraform, true)(this._awsKmsConfig.internalValue),
      azure_key_vault_config: cdktf.listMapper(encryptionAtRestAzureKeyVaultConfigToTerraform, true)(this._azureKeyVaultConfig.internalValue),
      google_cloud_kms_config: cdktf.listMapper(encryptionAtRestGoogleCloudKmsConfigToTerraform, true)(this._googleCloudKmsConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_kms_config: {
        value: cdktf.listMapperHcl(encryptionAtRestAwsKmsConfigToHclTerraform, true)(this._awsKmsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EncryptionAtRestAwsKmsConfigList",
      },
      azure_key_vault_config: {
        value: cdktf.listMapperHcl(encryptionAtRestAzureKeyVaultConfigToHclTerraform, true)(this._azureKeyVaultConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EncryptionAtRestAzureKeyVaultConfigList",
      },
      google_cloud_kms_config: {
        value: cdktf.listMapperHcl(encryptionAtRestGoogleCloudKmsConfigToHclTerraform, true)(this._googleCloudKmsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EncryptionAtRestGoogleCloudKmsConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
