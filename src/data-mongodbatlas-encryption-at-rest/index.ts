// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/data-sources/encryption_at_rest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMongodbatlasEncryptionAtRestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique 24-hexadecimal digit string that identifies your project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/data-sources/encryption_at_rest#project_id DataMongodbatlasEncryptionAtRest#project_id}
  */
  readonly projectId: string;
}
export interface DataMongodbatlasEncryptionAtRestAwsKmsConfig {
}

export function dataMongodbatlasEncryptionAtRestAwsKmsConfigToTerraform(struct?: DataMongodbatlasEncryptionAtRestAwsKmsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasEncryptionAtRestAwsKmsConfigToHclTerraform(struct?: DataMongodbatlasEncryptionAtRestAwsKmsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMongodbatlasEncryptionAtRestAwsKmsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasEncryptionAtRestAwsKmsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_key_id - computed: true, optional: false, required: false
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }

  // customer_master_key_id - computed: true, optional: false, required: false
  public get customerMasterKeyId() {
    return this.getStringAttribute('customer_master_key_id');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // require_private_networking - computed: true, optional: false, required: false
  public get requirePrivateNetworking() {
    return this.getBooleanAttribute('require_private_networking');
  }

  // role_id - computed: true, optional: false, required: false
  public get roleId() {
    return this.getStringAttribute('role_id');
  }

  // secret_access_key - computed: true, optional: false, required: false
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }

  // valid - computed: true, optional: false, required: false
  public get valid() {
    return this.getBooleanAttribute('valid');
  }
}
export interface DataMongodbatlasEncryptionAtRestAzureKeyVaultConfig {
}

export function dataMongodbatlasEncryptionAtRestAzureKeyVaultConfigToTerraform(struct?: DataMongodbatlasEncryptionAtRestAzureKeyVaultConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasEncryptionAtRestAzureKeyVaultConfigToHclTerraform(struct?: DataMongodbatlasEncryptionAtRestAzureKeyVaultConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMongodbatlasEncryptionAtRestAzureKeyVaultConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasEncryptionAtRestAzureKeyVaultConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // azure_environment - computed: true, optional: false, required: false
  public get azureEnvironment() {
    return this.getStringAttribute('azure_environment');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // key_identifier - computed: true, optional: false, required: false
  public get keyIdentifier() {
    return this.getStringAttribute('key_identifier');
  }

  // key_vault_name - computed: true, optional: false, required: false
  public get keyVaultName() {
    return this.getStringAttribute('key_vault_name');
  }

  // require_private_networking - computed: true, optional: false, required: false
  public get requirePrivateNetworking() {
    return this.getBooleanAttribute('require_private_networking');
  }

  // resource_group_name - computed: true, optional: false, required: false
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }

  // subscription_id - computed: true, optional: false, required: false
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // valid - computed: true, optional: false, required: false
  public get valid() {
    return this.getBooleanAttribute('valid');
  }
}
export interface DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfig {
}

export function dataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigToTerraform(struct?: DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigToHclTerraform(struct?: DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // key_version_resource_id - computed: true, optional: false, required: false
  public get keyVersionResourceId() {
    return this.getStringAttribute('key_version_resource_id');
  }

  // service_account_key - computed: true, optional: false, required: false
  public get serviceAccountKey() {
    return this.getStringAttribute('service_account_key');
  }

  // valid - computed: true, optional: false, required: false
  public get valid() {
    return this.getBooleanAttribute('valid');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/data-sources/encryption_at_rest mongodbatlas_encryption_at_rest}
*/
export class DataMongodbatlasEncryptionAtRest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_encryption_at_rest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMongodbatlasEncryptionAtRest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMongodbatlasEncryptionAtRest to import
  * @param importFromId The id of the existing DataMongodbatlasEncryptionAtRest that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/data-sources/encryption_at_rest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMongodbatlasEncryptionAtRest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_encryption_at_rest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/data-sources/encryption_at_rest mongodbatlas_encryption_at_rest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMongodbatlasEncryptionAtRestConfig
  */
  public constructor(scope: Construct, id: string, config: DataMongodbatlasEncryptionAtRestConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_encryption_at_rest',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.35.0',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_kms_config - computed: true, optional: false, required: false
  private _awsKmsConfig = new DataMongodbatlasEncryptionAtRestAwsKmsConfigOutputReference(this, "aws_kms_config");
  public get awsKmsConfig() {
    return this._awsKmsConfig;
  }

  // azure_key_vault_config - computed: true, optional: false, required: false
  private _azureKeyVaultConfig = new DataMongodbatlasEncryptionAtRestAzureKeyVaultConfigOutputReference(this, "azure_key_vault_config");
  public get azureKeyVaultConfig() {
    return this._azureKeyVaultConfig;
  }

  // enabled_for_search_nodes - computed: true, optional: false, required: false
  public get enabledForSearchNodes() {
    return this.getBooleanAttribute('enabled_for_search_nodes');
  }

  // google_cloud_kms_config - computed: true, optional: false, required: false
  private _googleCloudKmsConfig = new DataMongodbatlasEncryptionAtRestGoogleCloudKmsConfigOutputReference(this, "google_cloud_kms_config");
  public get googleCloudKmsConfig() {
    return this._googleCloudKmsConfig;
  }

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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      project_id: cdktf.stringToTerraform(this._projectId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
