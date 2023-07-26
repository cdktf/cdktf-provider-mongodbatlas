// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/data-sources/serverless_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMongodbatlasServerlessInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/data-sources/serverless_instance#continuous_backup_enabled DataMongodbatlasServerlessInstance#continuous_backup_enabled}
  */
  readonly continuousBackupEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/data-sources/serverless_instance#name DataMongodbatlasServerlessInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/data-sources/serverless_instance#project_id DataMongodbatlasServerlessInstance#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/data-sources/serverless_instance#state_name DataMongodbatlasServerlessInstance#state_name}
  */
  readonly stateName?: string;
  /**
  * links block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/data-sources/serverless_instance#links DataMongodbatlasServerlessInstance#links}
  */
  readonly links?: DataMongodbatlasServerlessInstanceLinks[] | cdktf.IResolvable;
}
export interface DataMongodbatlasServerlessInstanceLinks {
}

export function dataMongodbatlasServerlessInstanceLinksToTerraform(struct?: DataMongodbatlasServerlessInstanceLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataMongodbatlasServerlessInstanceLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasServerlessInstanceLinks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasServerlessInstanceLinks | cdktf.IResolvable | undefined) {
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

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }
}

export class DataMongodbatlasServerlessInstanceLinksList extends cdktf.ComplexList {
  public internalValue? : DataMongodbatlasServerlessInstanceLinks[] | cdktf.IResolvable

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
  public get(index: number): DataMongodbatlasServerlessInstanceLinksOutputReference {
    return new DataMongodbatlasServerlessInstanceLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/data-sources/serverless_instance mongodbatlas_serverless_instance}
*/
export class DataMongodbatlasServerlessInstance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_serverless_instance";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.2/docs/data-sources/serverless_instance mongodbatlas_serverless_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMongodbatlasServerlessInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataMongodbatlasServerlessInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_serverless_instance',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.10.2',
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
    this._continuousBackupEnabled = config.continuousBackupEnabled;
    this._name = config.name;
    this._projectId = config.projectId;
    this._stateName = config.stateName;
    this._links.internalValue = config.links;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_strings_private_endpoint_srv - computed: true, optional: false, required: false
  public get connectionStringsPrivateEndpointSrv() {
    return this.getListAttribute('connection_strings_private_endpoint_srv');
  }

  // connection_strings_standard_srv - computed: true, optional: false, required: false
  public get connectionStringsStandardSrv() {
    return this.getStringAttribute('connection_strings_standard_srv');
  }

  // continuous_backup_enabled - computed: true, optional: true, required: false
  private _continuousBackupEnabled?: boolean | cdktf.IResolvable; 
  public get continuousBackupEnabled() {
    return this.getBooleanAttribute('continuous_backup_enabled');
  }
  public set continuousBackupEnabled(value: boolean | cdktf.IResolvable) {
    this._continuousBackupEnabled = value;
  }
  public resetContinuousBackupEnabled() {
    this._continuousBackupEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuousBackupEnabledInput() {
    return this._continuousBackupEnabled;
  }

  // create_date - computed: true, optional: false, required: false
  public get createDate() {
    return this.getStringAttribute('create_date');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mongo_db_version - computed: true, optional: false, required: false
  public get mongoDbVersion() {
    return this.getStringAttribute('mongo_db_version');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // provider_settings_backing_provider_name - computed: true, optional: false, required: false
  public get providerSettingsBackingProviderName() {
    return this.getStringAttribute('provider_settings_backing_provider_name');
  }

  // provider_settings_provider_name - computed: true, optional: false, required: false
  public get providerSettingsProviderName() {
    return this.getStringAttribute('provider_settings_provider_name');
  }

  // provider_settings_region_name - computed: true, optional: false, required: false
  public get providerSettingsRegionName() {
    return this.getStringAttribute('provider_settings_region_name');
  }

  // state_name - computed: true, optional: true, required: false
  private _stateName?: string; 
  public get stateName() {
    return this.getStringAttribute('state_name');
  }
  public set stateName(value: string) {
    this._stateName = value;
  }
  public resetStateName() {
    this._stateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateNameInput() {
    return this._stateName;
  }

  // termination_protection_enabled - computed: true, optional: false, required: false
  public get terminationProtectionEnabled() {
    return this.getBooleanAttribute('termination_protection_enabled');
  }

  // links - computed: false, optional: true, required: false
  private _links = new DataMongodbatlasServerlessInstanceLinksList(this, "links", true);
  public get links() {
    return this._links;
  }
  public putLinks(value: DataMongodbatlasServerlessInstanceLinks[] | cdktf.IResolvable) {
    this._links.internalValue = value;
  }
  public resetLinks() {
    this._links.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linksInput() {
    return this._links.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      continuous_backup_enabled: cdktf.booleanToTerraform(this._continuousBackupEnabled),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      state_name: cdktf.stringToTerraform(this._stateName),
      links: cdktf.listMapper(dataMongodbatlasServerlessInstanceLinksToTerraform, true)(this._links.internalValue),
    };
  }
}
