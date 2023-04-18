// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/serverless_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServerlessInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/serverless_instance#continuous_backup_enabled ServerlessInstance#continuous_backup_enabled}
  */
  readonly continuousBackupEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/serverless_instance#id ServerlessInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/serverless_instance#name ServerlessInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/serverless_instance#project_id ServerlessInstance#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/serverless_instance#provider_settings_backing_provider_name ServerlessInstance#provider_settings_backing_provider_name}
  */
  readonly providerSettingsBackingProviderName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/serverless_instance#provider_settings_provider_name ServerlessInstance#provider_settings_provider_name}
  */
  readonly providerSettingsProviderName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/serverless_instance#provider_settings_region_name ServerlessInstance#provider_settings_region_name}
  */
  readonly providerSettingsRegionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/serverless_instance#state_name ServerlessInstance#state_name}
  */
  readonly stateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/serverless_instance#termination_protection_enabled ServerlessInstance#termination_protection_enabled}
  */
  readonly terminationProtectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * links block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/serverless_instance#links ServerlessInstance#links}
  */
  readonly links?: ServerlessInstanceLinks[] | cdktf.IResolvable;
}
export interface ServerlessInstanceLinks {
}

export function serverlessInstanceLinksToTerraform(struct?: ServerlessInstanceLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class ServerlessInstanceLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServerlessInstanceLinks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerlessInstanceLinks | cdktf.IResolvable | undefined) {
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

export class ServerlessInstanceLinksList extends cdktf.ComplexList {
  public internalValue? : ServerlessInstanceLinks[] | cdktf.IResolvable

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
  public get(index: number): ServerlessInstanceLinksOutputReference {
    return new ServerlessInstanceLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/serverless_instance mongodbatlas_serverless_instance}
*/
export class ServerlessInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_serverless_instance";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/resources/serverless_instance mongodbatlas_serverless_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServerlessInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: ServerlessInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_serverless_instance',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.8.2',
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
    this._id = config.id;
    this._name = config.name;
    this._projectId = config.projectId;
    this._providerSettingsBackingProviderName = config.providerSettingsBackingProviderName;
    this._providerSettingsProviderName = config.providerSettingsProviderName;
    this._providerSettingsRegionName = config.providerSettingsRegionName;
    this._stateName = config.stateName;
    this._terminationProtectionEnabled = config.terminationProtectionEnabled;
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

  // provider_settings_backing_provider_name - computed: false, optional: false, required: true
  private _providerSettingsBackingProviderName?: string; 
  public get providerSettingsBackingProviderName() {
    return this.getStringAttribute('provider_settings_backing_provider_name');
  }
  public set providerSettingsBackingProviderName(value: string) {
    this._providerSettingsBackingProviderName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerSettingsBackingProviderNameInput() {
    return this._providerSettingsBackingProviderName;
  }

  // provider_settings_provider_name - computed: false, optional: false, required: true
  private _providerSettingsProviderName?: string; 
  public get providerSettingsProviderName() {
    return this.getStringAttribute('provider_settings_provider_name');
  }
  public set providerSettingsProviderName(value: string) {
    this._providerSettingsProviderName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerSettingsProviderNameInput() {
    return this._providerSettingsProviderName;
  }

  // provider_settings_region_name - computed: false, optional: false, required: true
  private _providerSettingsRegionName?: string; 
  public get providerSettingsRegionName() {
    return this.getStringAttribute('provider_settings_region_name');
  }
  public set providerSettingsRegionName(value: string) {
    this._providerSettingsRegionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerSettingsRegionNameInput() {
    return this._providerSettingsRegionName;
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

  // termination_protection_enabled - computed: true, optional: true, required: false
  private _terminationProtectionEnabled?: boolean | cdktf.IResolvable; 
  public get terminationProtectionEnabled() {
    return this.getBooleanAttribute('termination_protection_enabled');
  }
  public set terminationProtectionEnabled(value: boolean | cdktf.IResolvable) {
    this._terminationProtectionEnabled = value;
  }
  public resetTerminationProtectionEnabled() {
    this._terminationProtectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationProtectionEnabledInput() {
    return this._terminationProtectionEnabled;
  }

  // links - computed: false, optional: true, required: false
  private _links = new ServerlessInstanceLinksList(this, "links", true);
  public get links() {
    return this._links;
  }
  public putLinks(value: ServerlessInstanceLinks[] | cdktf.IResolvable) {
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      provider_settings_backing_provider_name: cdktf.stringToTerraform(this._providerSettingsBackingProviderName),
      provider_settings_provider_name: cdktf.stringToTerraform(this._providerSettingsProviderName),
      provider_settings_region_name: cdktf.stringToTerraform(this._providerSettingsRegionName),
      state_name: cdktf.stringToTerraform(this._stateName),
      termination_protection_enabled: cdktf.booleanToTerraform(this._terminationProtectionEnabled),
      links: cdktf.listMapper(serverlessInstanceLinksToTerraform, true)(this._links.internalValue),
    };
  }
}
