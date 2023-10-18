// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/serverless_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServerlessInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/serverless_instance#continuous_backup_enabled ServerlessInstance#continuous_backup_enabled}
  */
  readonly continuousBackupEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/serverless_instance#id ServerlessInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/serverless_instance#name ServerlessInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/serverless_instance#project_id ServerlessInstance#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/serverless_instance#provider_settings_backing_provider_name ServerlessInstance#provider_settings_backing_provider_name}
  */
  readonly providerSettingsBackingProviderName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/serverless_instance#provider_settings_provider_name ServerlessInstance#provider_settings_provider_name}
  */
  readonly providerSettingsProviderName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/serverless_instance#provider_settings_region_name ServerlessInstance#provider_settings_region_name}
  */
  readonly providerSettingsRegionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/serverless_instance#state_name ServerlessInstance#state_name}
  */
  readonly stateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/serverless_instance#termination_protection_enabled ServerlessInstance#termination_protection_enabled}
  */
  readonly terminationProtectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * links block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/serverless_instance#links ServerlessInstance#links}
  */
  readonly links?: ServerlessInstanceLinks[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/serverless_instance#tags ServerlessInstance#tags}
  */
  readonly tags?: ServerlessInstanceTags[] | cdktf.IResolvable;
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
export interface ServerlessInstanceTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/serverless_instance#key ServerlessInstance#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/serverless_instance#value ServerlessInstance#value}
  */
  readonly value: string;
}

export function serverlessInstanceTagsToTerraform(struct?: ServerlessInstanceTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class ServerlessInstanceTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServerlessInstanceTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerlessInstanceTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServerlessInstanceTagsList extends cdktf.ComplexList {
  public internalValue? : ServerlessInstanceTags[] | cdktf.IResolvable

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
  public get(index: number): ServerlessInstanceTagsOutputReference {
    return new ServerlessInstanceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/serverless_instance mongodbatlas_serverless_instance}
*/
export class ServerlessInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_serverless_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServerlessInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServerlessInstance to import
  * @param importFromId The id of the existing ServerlessInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/serverless_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServerlessInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_serverless_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/serverless_instance mongodbatlas_serverless_instance} Resource
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
        providerVersion: '1.12.1',
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
    this._tags.internalValue = config.tags;
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

  // tags - computed: false, optional: true, required: false
  private _tags = new ServerlessInstanceTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ServerlessInstanceTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
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
      tags: cdktf.listMapper(serverlessInstanceTagsToTerraform, true)(this._tags.internalValue),
    };
  }
}
