// https://www.terraform.io/docs/providers/mongodbatlas/r/encryption_at_rest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EncryptionAtRestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/encryption_at_rest#aws_kms EncryptionAtRest#aws_kms}
  */
  readonly awsKms?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/encryption_at_rest#azure_key_vault EncryptionAtRest#azure_key_vault}
  */
  readonly azureKeyVault?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/encryption_at_rest#google_cloud_kms EncryptionAtRest#google_cloud_kms}
  */
  readonly googleCloudKms?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/encryption_at_rest#id EncryptionAtRest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/encryption_at_rest#project_id EncryptionAtRest#project_id}
  */
  readonly projectId: string;
  /**
  * aws_kms_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/encryption_at_rest#aws_kms_config EncryptionAtRest#aws_kms_config}
  */
  readonly awsKmsConfig?: EncryptionAtRestAwsKmsConfig;
  /**
  * azure_key_vault_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/encryption_at_rest#azure_key_vault_config EncryptionAtRest#azure_key_vault_config}
  */
  readonly azureKeyVaultConfig?: EncryptionAtRestAzureKeyVaultConfig;
  /**
  * google_cloud_kms_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/encryption_at_rest#google_cloud_kms_config EncryptionAtRest#google_cloud_kms_config}
  */
  readonly googleCloudKmsConfig?: EncryptionAtRestGoogleCloudKmsConfig;
}
export interface EncryptionAtRestAwsKmsConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/encryption_at_rest#access_key_id EncryptionAtRest#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/encryption_at_rest#customer_master_key_id EncryptionAtRest#customer_master_key_id}
  */
  readonly customerMasterKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/encryption_at_rest#enabled EncryptionAtRest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/encryption_at_rest#region EncryptionAtRest#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/encryption_at_rest#role_id EncryptionAtRest#role_id}
  */
  readonly roleId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/encryption_at_rest#secret_access_key EncryptionAtRest#secret_access_key}
  */
  readonly secretAccessKey?: string;
}

export function encryptionAtRestAwsKmsConfigToTerraform(struct?: EncryptionAtRestAwsKmsConfigOutputReference | EncryptionAtRestAwsKmsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    customer_master_key_id: cdktf.stringToTerraform(struct!.customerMasterKeyId),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    region: cdktf.stringToTerraform(struct!.region),
    role_id: cdktf.stringToTerraform(struct!.roleId),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
  }
}

export class EncryptionAtRestAwsKmsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EncryptionAtRestAwsKmsConfig | undefined {
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

  public set internalValue(value: EncryptionAtRestAwsKmsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKeyId = undefined;
      this._customerMasterKeyId = undefined;
      this._enabled = undefined;
      this._region = undefined;
      this._roleId = undefined;
      this._secretAccessKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKeyId = value.accessKeyId;
      this._customerMasterKeyId = value.customerMasterKeyId;
      this._enabled = value.enabled;
      this._region = value.region;
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

  // enabled - computed: false, optional: true, required: false
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
}
export interface EncryptionAtRestAzureKeyVaultConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/encryption_at_rest#azure_environment EncryptionAtRest#azure_environment}
  */
  readonly azureEnvironment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/encryption_at_rest#client_id EncryptionAtRest#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/encryption_at_rest#enabled EncryptionAtRest#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/encryption_at_rest#key_identifier EncryptionAtRest#key_identifier}
  */
  readonly keyIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/encryption_at_rest#key_vault_name EncryptionAtRest#key_vault_name}
  */
  readonly keyVaultName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/encryption_at_rest#resource_group_name EncryptionAtRest#resource_group_name}
  */
  readonly resourceGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/encryption_at_rest#secret EncryptionAtRest#secret}
  */
  readonly secret?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/encryption_at_rest#subscription_id EncryptionAtRest#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/encryption_at_rest#tenant_id EncryptionAtRest#tenant_id}
  */
  readonly tenantId?: string;
}

export function encryptionAtRestAzureKeyVaultConfigToTerraform(struct?: EncryptionAtRestAzureKeyVaultConfigOutputReference | EncryptionAtRestAzureKeyVaultConfig): any {
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
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
    secret: cdktf.stringToTerraform(struct!.secret),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}

export class EncryptionAtRestAzureKeyVaultConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EncryptionAtRestAzureKeyVaultConfig | undefined {
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

  public set internalValue(value: EncryptionAtRestAzureKeyVaultConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._azureEnvironment = undefined;
      this._clientId = undefined;
      this._enabled = undefined;
      this._keyIdentifier = undefined;
      this._keyVaultName = undefined;
      this._resourceGroupName = undefined;
      this._secret = undefined;
      this._subscriptionId = undefined;
      this._tenantId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._azureEnvironment = value.azureEnvironment;
      this._clientId = value.clientId;
      this._enabled = value.enabled;
      this._keyIdentifier = value.keyIdentifier;
      this._keyVaultName = value.keyVaultName;
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

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
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
}
export interface EncryptionAtRestGoogleCloudKmsConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/encryption_at_rest#enabled EncryptionAtRest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/encryption_at_rest#key_version_resource_id EncryptionAtRest#key_version_resource_id}
  */
  readonly keyVersionResourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/encryption_at_rest#service_account_key EncryptionAtRest#service_account_key}
  */
  readonly serviceAccountKey?: string;
}

export function encryptionAtRestGoogleCloudKmsConfigToTerraform(struct?: EncryptionAtRestGoogleCloudKmsConfigOutputReference | EncryptionAtRestGoogleCloudKmsConfig): any {
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

export class EncryptionAtRestGoogleCloudKmsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EncryptionAtRestGoogleCloudKmsConfig | undefined {
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

  public set internalValue(value: EncryptionAtRestGoogleCloudKmsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._keyVersionResourceId = undefined;
      this._serviceAccountKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._keyVersionResourceId = value.keyVersionResourceId;
      this._serviceAccountKey = value.serviceAccountKey;
    }
  }

  // enabled - computed: false, optional: true, required: false
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/mongodbatlas/r/encryption_at_rest mongodbatlas_encryption_at_rest}
*/
export class EncryptionAtRest extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_encryption_at_rest";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/mongodbatlas/r/encryption_at_rest mongodbatlas_encryption_at_rest} Resource
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
        providerVersion: '1.8.0',
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
    this._awsKms = config.awsKms;
    this._azureKeyVault = config.azureKeyVault;
    this._googleCloudKms = config.googleCloudKms;
    this._id = config.id;
    this._projectId = config.projectId;
    this._awsKmsConfig.internalValue = config.awsKmsConfig;
    this._azureKeyVaultConfig.internalValue = config.azureKeyVaultConfig;
    this._googleCloudKmsConfig.internalValue = config.googleCloudKmsConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_kms - computed: false, optional: true, required: false
  private _awsKms?: { [key: string]: string }; 
  public get awsKms() {
    return this.getStringMapAttribute('aws_kms');
  }
  public set awsKms(value: { [key: string]: string }) {
    this._awsKms = value;
  }
  public resetAwsKms() {
    this._awsKms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsKmsInput() {
    return this._awsKms;
  }

  // azure_key_vault - computed: false, optional: true, required: false
  private _azureKeyVault?: { [key: string]: string }; 
  public get azureKeyVault() {
    return this.getStringMapAttribute('azure_key_vault');
  }
  public set azureKeyVault(value: { [key: string]: string }) {
    this._azureKeyVault = value;
  }
  public resetAzureKeyVault() {
    this._azureKeyVault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureKeyVaultInput() {
    return this._azureKeyVault;
  }

  // google_cloud_kms - computed: false, optional: true, required: false
  private _googleCloudKms?: { [key: string]: string }; 
  public get googleCloudKms() {
    return this.getStringMapAttribute('google_cloud_kms');
  }
  public set googleCloudKms(value: { [key: string]: string }) {
    this._googleCloudKms = value;
  }
  public resetGoogleCloudKms() {
    this._googleCloudKms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudKmsInput() {
    return this._googleCloudKms;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
  private _awsKmsConfig = new EncryptionAtRestAwsKmsConfigOutputReference(this, "aws_kms_config");
  public get awsKmsConfig() {
    return this._awsKmsConfig;
  }
  public putAwsKmsConfig(value: EncryptionAtRestAwsKmsConfig) {
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
  private _azureKeyVaultConfig = new EncryptionAtRestAzureKeyVaultConfigOutputReference(this, "azure_key_vault_config");
  public get azureKeyVaultConfig() {
    return this._azureKeyVaultConfig;
  }
  public putAzureKeyVaultConfig(value: EncryptionAtRestAzureKeyVaultConfig) {
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
  private _googleCloudKmsConfig = new EncryptionAtRestGoogleCloudKmsConfigOutputReference(this, "google_cloud_kms_config");
  public get googleCloudKmsConfig() {
    return this._googleCloudKmsConfig;
  }
  public putGoogleCloudKmsConfig(value: EncryptionAtRestGoogleCloudKmsConfig) {
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
      aws_kms: cdktf.hashMapper(cdktf.stringToTerraform)(this._awsKms),
      azure_key_vault: cdktf.hashMapper(cdktf.stringToTerraform)(this._azureKeyVault),
      google_cloud_kms: cdktf.hashMapper(cdktf.stringToTerraform)(this._googleCloudKms),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      aws_kms_config: encryptionAtRestAwsKmsConfigToTerraform(this._awsKmsConfig.internalValue),
      azure_key_vault_config: encryptionAtRestAzureKeyVaultConfigToTerraform(this._azureKeyVaultConfig.internalValue),
      google_cloud_kms_config: encryptionAtRestGoogleCloudKmsConfigToTerraform(this._googleCloudKmsConfig.internalValue),
    };
  }
}
