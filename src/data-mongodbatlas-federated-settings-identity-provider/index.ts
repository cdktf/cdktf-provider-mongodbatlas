/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/federated_settings_identity_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMongodbatlasFederatedSettingsIdentityProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/federated_settings_identity_provider#federation_settings_id DataMongodbatlasFederatedSettingsIdentityProvider#federation_settings_id}
  */
  readonly federationSettingsId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/federated_settings_identity_provider#id DataMongodbatlasFederatedSettingsIdentityProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/federated_settings_identity_provider#identity_provider_id DataMongodbatlasFederatedSettingsIdentityProvider#identity_provider_id}
  */
  readonly identityProviderId: string;
}
export interface DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignments {
}

export function dataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsToTerraform(struct?: DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignments | undefined) {
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

export class DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference {
    return new DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappings {
}

export function dataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsToTerraform(struct?: DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappings | undefined) {
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
  private _roleAssignments = new DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList(this, "role_assignments", false);
  public get roleAssignments() {
    return this._roleAssignments;
  }
}

export class DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference {
    return new DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflicts {
}

export function dataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsToTerraform(struct?: DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflicts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflicts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflicts | undefined) {
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

export class DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference {
    return new DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgs {
}

export function dataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsToTerraform(struct?: DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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
  private _roleMappings = new DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList(this, "role_mappings", false);
  public get roleMappings() {
    return this._roleMappings;
  }

  // user_conflicts - computed: true, optional: false, required: false
  private _userConflicts = new DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList(this, "user_conflicts", false);
  public get userConflicts() {
    return this._userConflicts;
  }
}

export class DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference {
    return new DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificates {
}

export function dataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesToTerraform(struct?: DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // not_after - computed: true, optional: false, required: false
  public get notAfter() {
    return this.getStringAttribute('not_after');
  }

  // not_before - computed: true, optional: false, required: false
  public get notBefore() {
    return this.getStringAttribute('not_before');
  }
}

export class DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference {
    return new DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfo {
}

export function dataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoToTerraform(struct?: DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificates - computed: true, optional: false, required: false
  private _certificates = new DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList(this, "certificates", false);
  public get certificates() {
    return this._certificates;
  }

  // file_name - computed: true, optional: false, required: false
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
}

export class DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference {
    return new DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/federated_settings_identity_provider mongodbatlas_federated_settings_identity_provider}
*/
export class DataMongodbatlasFederatedSettingsIdentityProvider extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_federated_settings_identity_provider";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/federated_settings_identity_provider mongodbatlas_federated_settings_identity_provider} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMongodbatlasFederatedSettingsIdentityProviderConfig
  */
  public constructor(scope: Construct, id: string, config: DataMongodbatlasFederatedSettingsIdentityProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_federated_settings_identity_provider',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.10.0',
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
    this._identityProviderId = config.identityProviderId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acs_url - computed: true, optional: false, required: false
  public get acsUrl() {
    return this.getStringAttribute('acs_url');
  }

  // associated_domains - computed: true, optional: false, required: false
  public get associatedDomains() {
    return this.getListAttribute('associated_domains');
  }

  // associated_orgs - computed: true, optional: false, required: false
  private _associatedOrgs = new DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList(this, "associated_orgs", false);
  public get associatedOrgs() {
    return this._associatedOrgs;
  }

  // audience_uri - computed: true, optional: false, required: false
  public get audienceUri() {
    return this.getStringAttribute('audience_uri');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
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

  // identity_provider_id - computed: false, optional: false, required: true
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
  }

  // issuer_uri - computed: true, optional: false, required: false
  public get issuerUri() {
    return this.getStringAttribute('issuer_uri');
  }

  // okta_idp_id - computed: true, optional: false, required: false
  public get oktaIdpId() {
    return this.getStringAttribute('okta_idp_id');
  }

  // pem_file_info - computed: true, optional: false, required: false
  private _pemFileInfo = new DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList(this, "pem_file_info", false);
  public get pemFileInfo() {
    return this._pemFileInfo;
  }

  // request_binding - computed: true, optional: false, required: false
  public get requestBinding() {
    return this.getStringAttribute('request_binding');
  }

  // response_signature_algorithm - computed: true, optional: false, required: false
  public get responseSignatureAlgorithm() {
    return this.getStringAttribute('response_signature_algorithm');
  }

  // sso_debug_enabled - computed: true, optional: false, required: false
  public get ssoDebugEnabled() {
    return this.getBooleanAttribute('sso_debug_enabled');
  }

  // sso_url - computed: true, optional: false, required: false
  public get ssoUrl() {
    return this.getStringAttribute('sso_url');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      federation_settings_id: cdktf.stringToTerraform(this._federationSettingsId),
      id: cdktf.stringToTerraform(this._id),
      identity_provider_id: cdktf.stringToTerraform(this._identityProviderId),
    };
  }
}
