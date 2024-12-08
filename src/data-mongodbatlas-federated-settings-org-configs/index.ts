// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/data-sources/federated_settings_org_configs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMongodbatlasFederatedSettingsOrgConfigsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/data-sources/federated_settings_org_configs#federation_settings_id DataMongodbatlasFederatedSettingsOrgConfigs#federation_settings_id}
  */
  readonly federationSettingsId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/data-sources/federated_settings_org_configs#id DataMongodbatlasFederatedSettingsOrgConfigs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/data-sources/federated_settings_org_configs#items_per_page DataMongodbatlasFederatedSettingsOrgConfigs#items_per_page}
  */
  readonly itemsPerPage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/data-sources/federated_settings_org_configs#page_num DataMongodbatlasFederatedSettingsOrgConfigs#page_num}
  */
  readonly pageNum?: number;
}
export interface DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignments {
}

export function dataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsToTerraform(struct?: DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsToHclTerraform(struct?: DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getStringAttribute('org_id');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }
}

export class DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference {
    return new DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappings {
}

export function dataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsToTerraform(struct?: DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsToHclTerraform(struct?: DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // external_group_name - computed: true, optional: false, required: false
  public get externalGroupName() {
    return this.getStringAttribute('external_group_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // role_assignments - computed: true, optional: false, required: false
  private _roleAssignments = new DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsRoleAssignmentsList(this, "role_assignments", false);
  public get roleAssignments() {
    return this._roleAssignments;
  }
}

export class DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference {
    return new DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflicts {
}

export function dataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsToTerraform(struct?: DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflicts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsToHclTerraform(struct?: DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflicts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflicts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflicts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email_address - computed: true, optional: false, required: false
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }

  // federation_settings_id - computed: true, optional: false, required: false
  public get federationSettingsId() {
    return this.getStringAttribute('federation_settings_id');
  }

  // first_name - computed: true, optional: false, required: false
  public get firstName() {
    return this.getStringAttribute('first_name');
  }

  // last_name - computed: true, optional: false, required: false
  public get lastName() {
    return this.getStringAttribute('last_name');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }
}

export class DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference {
    return new DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasFederatedSettingsOrgConfigsResults {
}

export function dataMongodbatlasFederatedSettingsOrgConfigsResultsToTerraform(struct?: DataMongodbatlasFederatedSettingsOrgConfigsResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasFederatedSettingsOrgConfigsResultsToHclTerraform(struct?: DataMongodbatlasFederatedSettingsOrgConfigsResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasFederatedSettingsOrgConfigsResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasFederatedSettingsOrgConfigsResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_access_identity_provider_ids - computed: true, optional: false, required: false
  public get dataAccessIdentityProviderIds() {
    return this.getListAttribute('data_access_identity_provider_ids');
  }

  // domain_allow_list - computed: true, optional: false, required: false
  public get domainAllowList() {
    return this.getListAttribute('domain_allow_list');
  }

  // domain_restriction_enabled - computed: true, optional: false, required: false
  public get domainRestrictionEnabled() {
    return this.getBooleanAttribute('domain_restriction_enabled');
  }

  // identity_provider_id - computed: true, optional: false, required: false
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getStringAttribute('org_id');
  }

  // post_auth_role_grants - computed: true, optional: false, required: false
  public get postAuthRoleGrants() {
    return this.getListAttribute('post_auth_role_grants');
  }

  // role_mappings - computed: true, optional: false, required: false
  private _roleMappings = new DataMongodbatlasFederatedSettingsOrgConfigsResultsRoleMappingsList(this, "role_mappings", false);
  public get roleMappings() {
    return this._roleMappings;
  }

  // user_conflicts - computed: true, optional: false, required: false
  private _userConflicts = new DataMongodbatlasFederatedSettingsOrgConfigsResultsUserConflictsList(this, "user_conflicts", false);
  public get userConflicts() {
    return this._userConflicts;
  }
}

export class DataMongodbatlasFederatedSettingsOrgConfigsResultsList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference {
    return new DataMongodbatlasFederatedSettingsOrgConfigsResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/data-sources/federated_settings_org_configs mongodbatlas_federated_settings_org_configs}
*/
export class DataMongodbatlasFederatedSettingsOrgConfigs extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_federated_settings_org_configs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMongodbatlasFederatedSettingsOrgConfigs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMongodbatlasFederatedSettingsOrgConfigs to import
  * @param importFromId The id of the existing DataMongodbatlasFederatedSettingsOrgConfigs that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/data-sources/federated_settings_org_configs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMongodbatlasFederatedSettingsOrgConfigs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_federated_settings_org_configs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/data-sources/federated_settings_org_configs mongodbatlas_federated_settings_org_configs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMongodbatlasFederatedSettingsOrgConfigsConfig
  */
  public constructor(scope: Construct, id: string, config: DataMongodbatlasFederatedSettingsOrgConfigsConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_federated_settings_org_configs',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.22.0',
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
    this._federationSettingsId = config.federationSettingsId;
    this._id = config.id;
    this._itemsPerPage = config.itemsPerPage;
    this._pageNum = config.pageNum;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // federation_settings_id - computed: false, optional: false, required: true
  private _federationSettingsId?: string; 
  public get federationSettingsId() {
    return this.getStringAttribute('federation_settings_id');
  }
  public set federationSettingsId(value: string) {
    this._federationSettingsId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get federationSettingsIdInput() {
    return this._federationSettingsId;
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

  // items_per_page - computed: false, optional: true, required: false
  private _itemsPerPage?: number; 
  public get itemsPerPage() {
    return this.getNumberAttribute('items_per_page');
  }
  public set itemsPerPage(value: number) {
    this._itemsPerPage = value;
  }
  public resetItemsPerPage() {
    this._itemsPerPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsPerPageInput() {
    return this._itemsPerPage;
  }

  // page_num - computed: false, optional: true, required: false
  private _pageNum?: number; 
  public get pageNum() {
    return this.getNumberAttribute('page_num');
  }
  public set pageNum(value: number) {
    this._pageNum = value;
  }
  public resetPageNum() {
    this._pageNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageNumInput() {
    return this._pageNum;
  }

  // results - computed: true, optional: false, required: false
  private _results = new DataMongodbatlasFederatedSettingsOrgConfigsResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      federation_settings_id: cdktf.stringToTerraform(this._federationSettingsId),
      id: cdktf.stringToTerraform(this._id),
      items_per_page: cdktf.numberToTerraform(this._itemsPerPage),
      page_num: cdktf.numberToTerraform(this._pageNum),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      federation_settings_id: {
        value: cdktf.stringToHclTerraform(this._federationSettingsId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      items_per_page: {
        value: cdktf.numberToHclTerraform(this._itemsPerPage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      page_num: {
        value: cdktf.numberToHclTerraform(this._pageNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
