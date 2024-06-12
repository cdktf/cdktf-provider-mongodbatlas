// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/data-sources/cloud_provider_access_setup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMongodbatlasCloudProviderAccessSetupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/data-sources/cloud_provider_access_setup#id DataMongodbatlasCloudProviderAccessSetup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/data-sources/cloud_provider_access_setup#project_id DataMongodbatlasCloudProviderAccessSetup#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/data-sources/cloud_provider_access_setup#provider_name DataMongodbatlasCloudProviderAccessSetup#provider_name}
  */
  readonly providerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/data-sources/cloud_provider_access_setup#role_id DataMongodbatlasCloudProviderAccessSetup#role_id}
  */
  readonly roleId: string;
  /**
  * azure_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/data-sources/cloud_provider_access_setup#azure_config DataMongodbatlasCloudProviderAccessSetup#azure_config}
  */
  readonly azureConfig?: DataMongodbatlasCloudProviderAccessSetupAzureConfig[] | cdktf.IResolvable;
}
export interface DataMongodbatlasCloudProviderAccessSetupAwsConfig {
}

export function dataMongodbatlasCloudProviderAccessSetupAwsConfigToTerraform(struct?: DataMongodbatlasCloudProviderAccessSetupAwsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasCloudProviderAccessSetupAwsConfigToHclTerraform(struct?: DataMongodbatlasCloudProviderAccessSetupAwsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMongodbatlasCloudProviderAccessSetupAwsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasCloudProviderAccessSetupAwsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // atlas_assumed_role_external_id - computed: true, optional: false, required: false
  public get atlasAssumedRoleExternalId() {
    return this.getStringAttribute('atlas_assumed_role_external_id');
  }

  // atlas_aws_account_arn - computed: true, optional: false, required: false
  public get atlasAwsAccountArn() {
    return this.getStringAttribute('atlas_aws_account_arn');
  }
}

export class DataMongodbatlasCloudProviderAccessSetupAwsConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference {
    return new DataMongodbatlasCloudProviderAccessSetupAwsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasCloudProviderAccessSetupAzureConfig {
}

export function dataMongodbatlasCloudProviderAccessSetupAzureConfigToTerraform(struct?: DataMongodbatlasCloudProviderAccessSetupAzureConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasCloudProviderAccessSetupAzureConfigToHclTerraform(struct?: DataMongodbatlasCloudProviderAccessSetupAzureConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasCloudProviderAccessSetupAzureConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasCloudProviderAccessSetupAzureConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // atlas_azure_app_id - computed: true, optional: false, required: false
  public get atlasAzureAppId() {
    return this.getStringAttribute('atlas_azure_app_id');
  }

  // service_principal_id - computed: true, optional: false, required: false
  public get servicePrincipalId() {
    return this.getStringAttribute('service_principal_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
}

export class DataMongodbatlasCloudProviderAccessSetupAzureConfigList extends cdktf.ComplexList {
  public internalValue? : DataMongodbatlasCloudProviderAccessSetupAzureConfig[] | cdktf.IResolvable

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
  public get(index: number): DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference {
    return new DataMongodbatlasCloudProviderAccessSetupAzureConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/data-sources/cloud_provider_access_setup mongodbatlas_cloud_provider_access_setup}
*/
export class DataMongodbatlasCloudProviderAccessSetup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_cloud_provider_access_setup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMongodbatlasCloudProviderAccessSetup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMongodbatlasCloudProviderAccessSetup to import
  * @param importFromId The id of the existing DataMongodbatlasCloudProviderAccessSetup that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/data-sources/cloud_provider_access_setup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMongodbatlasCloudProviderAccessSetup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_cloud_provider_access_setup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/data-sources/cloud_provider_access_setup mongodbatlas_cloud_provider_access_setup} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMongodbatlasCloudProviderAccessSetupConfig
  */
  public constructor(scope: Construct, id: string, config: DataMongodbatlasCloudProviderAccessSetupConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_cloud_provider_access_setup',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.17.0',
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
    this._id = config.id;
    this._projectId = config.projectId;
    this._providerName = config.providerName;
    this._roleId = config.roleId;
    this._azureConfig.internalValue = config.azureConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws - computed: true, optional: false, required: false
  private _aws = new cdktf.StringMap(this, "aws");
  public get aws() {
    return this._aws;
  }

  // aws_config - computed: true, optional: false, required: false
  private _awsConfig = new DataMongodbatlasCloudProviderAccessSetupAwsConfigList(this, "aws_config", false);
  public get awsConfig() {
    return this._awsConfig;
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
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

  // last_updated_date - computed: true, optional: false, required: false
  public get lastUpdatedDate() {
    return this.getStringAttribute('last_updated_date');
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

  // provider_name - computed: false, optional: false, required: true
  private _providerName?: string; 
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }
  public set providerName(value: string) {
    this._providerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerNameInput() {
    return this._providerName;
  }

  // role_id - computed: false, optional: false, required: true
  private _roleId?: string; 
  public get roleId() {
    return this.getStringAttribute('role_id');
  }
  public set roleId(value: string) {
    this._roleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId;
  }

  // azure_config - computed: false, optional: true, required: false
  private _azureConfig = new DataMongodbatlasCloudProviderAccessSetupAzureConfigList(this, "azure_config", false);
  public get azureConfig() {
    return this._azureConfig;
  }
  public putAzureConfig(value: DataMongodbatlasCloudProviderAccessSetupAzureConfig[] | cdktf.IResolvable) {
    this._azureConfig.internalValue = value;
  }
  public resetAzureConfig() {
    this._azureConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureConfigInput() {
    return this._azureConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      provider_name: cdktf.stringToTerraform(this._providerName),
      role_id: cdktf.stringToTerraform(this._roleId),
      azure_config: cdktf.listMapper(dataMongodbatlasCloudProviderAccessSetupAzureConfigToTerraform, true)(this._azureConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_name: {
        value: cdktf.stringToHclTerraform(this._providerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_id: {
        value: cdktf.stringToHclTerraform(this._roleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_config: {
        value: cdktf.listMapperHcl(dataMongodbatlasCloudProviderAccessSetupAzureConfigToHclTerraform, true)(this._azureConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataMongodbatlasCloudProviderAccessSetupAzureConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
