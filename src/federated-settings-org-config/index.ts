/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/federated_settings_org_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FederatedSettingsOrgConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/federated_settings_org_config#data_access_identity_provider_ids FederatedSettingsOrgConfig#data_access_identity_provider_ids}
  */
  readonly dataAccessIdentityProviderIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/federated_settings_org_config#domain_allow_list FederatedSettingsOrgConfig#domain_allow_list}
  */
  readonly domainAllowList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/federated_settings_org_config#domain_restriction_enabled FederatedSettingsOrgConfig#domain_restriction_enabled}
  */
  readonly domainRestrictionEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/federated_settings_org_config#federation_settings_id FederatedSettingsOrgConfig#federation_settings_id}
  */
  readonly federationSettingsId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/federated_settings_org_config#id FederatedSettingsOrgConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/federated_settings_org_config#identity_provider_id FederatedSettingsOrgConfig#identity_provider_id}
  */
  readonly identityProviderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/federated_settings_org_config#org_id FederatedSettingsOrgConfig#org_id}
  */
  readonly orgId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/federated_settings_org_config#post_auth_role_grants FederatedSettingsOrgConfig#post_auth_role_grants}
  */
  readonly postAuthRoleGrants?: string[];
}
export interface FederatedSettingsOrgConfigUserConflicts {
}

export function federatedSettingsOrgConfigUserConflictsToTerraform(struct?: FederatedSettingsOrgConfigUserConflicts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function federatedSettingsOrgConfigUserConflictsToHclTerraform(struct?: FederatedSettingsOrgConfigUserConflicts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FederatedSettingsOrgConfigUserConflictsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FederatedSettingsOrgConfigUserConflicts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FederatedSettingsOrgConfigUserConflicts | undefined) {
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

export class FederatedSettingsOrgConfigUserConflictsList extends cdktf.ComplexList {

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
  public get(index: number): FederatedSettingsOrgConfigUserConflictsOutputReference {
    return new FederatedSettingsOrgConfigUserConflictsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/federated_settings_org_config mongodbatlas_federated_settings_org_config}
*/
export class FederatedSettingsOrgConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_federated_settings_org_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FederatedSettingsOrgConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FederatedSettingsOrgConfig to import
  * @param importFromId The id of the existing FederatedSettingsOrgConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/federated_settings_org_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FederatedSettingsOrgConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_federated_settings_org_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/resources/federated_settings_org_config mongodbatlas_federated_settings_org_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FederatedSettingsOrgConfigConfig
  */
  public constructor(scope: Construct, id: string, config: FederatedSettingsOrgConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_federated_settings_org_config',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.41.1',
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
    this._dataAccessIdentityProviderIds = config.dataAccessIdentityProviderIds;
    this._domainAllowList = config.domainAllowList;
    this._domainRestrictionEnabled = config.domainRestrictionEnabled;
    this._federationSettingsId = config.federationSettingsId;
    this._id = config.id;
    this._identityProviderId = config.identityProviderId;
    this._orgId = config.orgId;
    this._postAuthRoleGrants = config.postAuthRoleGrants;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_access_identity_provider_ids - computed: false, optional: true, required: false
  private _dataAccessIdentityProviderIds?: string[]; 
  public get dataAccessIdentityProviderIds() {
    return this.getListAttribute('data_access_identity_provider_ids');
  }
  public set dataAccessIdentityProviderIds(value: string[]) {
    this._dataAccessIdentityProviderIds = value;
  }
  public resetDataAccessIdentityProviderIds() {
    this._dataAccessIdentityProviderIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataAccessIdentityProviderIdsInput() {
    return this._dataAccessIdentityProviderIds;
  }

  // domain_allow_list - computed: false, optional: true, required: false
  private _domainAllowList?: string[]; 
  public get domainAllowList() {
    return this.getListAttribute('domain_allow_list');
  }
  public set domainAllowList(value: string[]) {
    this._domainAllowList = value;
  }
  public resetDomainAllowList() {
    this._domainAllowList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainAllowListInput() {
    return this._domainAllowList;
  }

  // domain_restriction_enabled - computed: false, optional: false, required: true
  private _domainRestrictionEnabled?: boolean | cdktf.IResolvable; 
  public get domainRestrictionEnabled() {
    return this.getBooleanAttribute('domain_restriction_enabled');
  }
  public set domainRestrictionEnabled(value: boolean | cdktf.IResolvable) {
    this._domainRestrictionEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainRestrictionEnabledInput() {
    return this._domainRestrictionEnabled;
  }

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

  // identity_provider_id - computed: false, optional: true, required: false
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  public resetIdentityProviderId() {
    this._identityProviderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
  }

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // post_auth_role_grants - computed: false, optional: true, required: false
  private _postAuthRoleGrants?: string[]; 
  public get postAuthRoleGrants() {
    return this.getListAttribute('post_auth_role_grants');
  }
  public set postAuthRoleGrants(value: string[]) {
    this._postAuthRoleGrants = value;
  }
  public resetPostAuthRoleGrants() {
    this._postAuthRoleGrants = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postAuthRoleGrantsInput() {
    return this._postAuthRoleGrants;
  }

  // user_conflicts - computed: true, optional: false, required: false
  private _userConflicts = new FederatedSettingsOrgConfigUserConflictsList(this, "user_conflicts", false);
  public get userConflicts() {
    return this._userConflicts;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_access_identity_provider_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dataAccessIdentityProviderIds),
      domain_allow_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domainAllowList),
      domain_restriction_enabled: cdktf.booleanToTerraform(this._domainRestrictionEnabled),
      federation_settings_id: cdktf.stringToTerraform(this._federationSettingsId),
      id: cdktf.stringToTerraform(this._id),
      identity_provider_id: cdktf.stringToTerraform(this._identityProviderId),
      org_id: cdktf.stringToTerraform(this._orgId),
      post_auth_role_grants: cdktf.listMapper(cdktf.stringToTerraform, false)(this._postAuthRoleGrants),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_access_identity_provider_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dataAccessIdentityProviderIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      domain_allow_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domainAllowList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      domain_restriction_enabled: {
        value: cdktf.booleanToHclTerraform(this._domainRestrictionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
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
      identity_provider_id: {
        value: cdktf.stringToHclTerraform(this._identityProviderId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      post_auth_role_grants: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._postAuthRoleGrants),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
