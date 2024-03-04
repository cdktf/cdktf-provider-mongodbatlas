// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/data-sources/federated_settings_identity_providers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMongodbatlasFederatedSettingsIdentityProvidersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/data-sources/federated_settings_identity_providers#federation_settings_id DataMongodbatlasFederatedSettingsIdentityProviders#federation_settings_id}
  */
  readonly federationSettingsId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/data-sources/federated_settings_identity_providers#id DataMongodbatlasFederatedSettingsIdentityProviders#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/data-sources/federated_settings_identity_providers#items_per_page DataMongodbatlasFederatedSettingsIdentityProviders#items_per_page}
  */
  readonly itemsPerPage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/data-sources/federated_settings_identity_providers#page_num DataMongodbatlasFederatedSettingsIdentityProviders#page_num}
  */
  readonly pageNum?: number;
}
export interface DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignments {
}

export function dataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsToTerraform(struct?: DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsToHclTerraform(struct?: DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignments | undefined) {
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

export class DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference {
    return new DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappings {
}

export function dataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsToTerraform(struct?: DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsToHclTerraform(struct?: DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappings | undefined) {
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
  private _roleAssignments = new DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsList(this, "role_assignments", false);
  public get roleAssignments() {
    return this._roleAssignments;
  }
}

export class DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference {
    return new DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflicts {
}

export function dataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsToTerraform(struct?: DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflicts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsToHclTerraform(struct?: DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflicts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflicts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflicts | undefined) {
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

export class DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference {
    return new DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgs {
}

export function dataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsToTerraform(struct?: DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsToHclTerraform(struct?: DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgs | undefined) {
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
  private _roleMappings = new DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsList(this, "role_mappings", false);
  public get roleMappings() {
    return this._roleMappings;
  }

  // user_conflicts - computed: true, optional: false, required: false
  private _userConflicts = new DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsList(this, "user_conflicts", false);
  public get userConflicts() {
    return this._userConflicts;
  }
}

export class DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference {
    return new DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificates {
}

export function dataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesToTerraform(struct?: DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesToHclTerraform(struct?: DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificates | undefined) {
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

export class DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference {
    return new DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfo {
}

export function dataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoToTerraform(struct?: DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoToHclTerraform(struct?: DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificates - computed: true, optional: false, required: false
  private _certificates = new DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesList(this, "certificates", false);
  public get certificates() {
    return this._certificates;
  }

  // file_name - computed: true, optional: false, required: false
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
}

export class DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference {
    return new DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasFederatedSettingsIdentityProvidersResults {
}

export function dataMongodbatlasFederatedSettingsIdentityProvidersResultsToTerraform(struct?: DataMongodbatlasFederatedSettingsIdentityProvidersResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasFederatedSettingsIdentityProvidersResultsToHclTerraform(struct?: DataMongodbatlasFederatedSettingsIdentityProvidersResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasFederatedSettingsIdentityProvidersResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasFederatedSettingsIdentityProvidersResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acs_url - computed: true, optional: false, required: false
  public get acsUrl() {
    return this.getStringAttribute('acs_url');
  }

  // associated_domains - computed: true, optional: false, required: false
  public get associatedDomains() {
    return this.getListAttribute('associated_domains');
  }

  // associated_orgs - computed: true, optional: false, required: false
  private _associatedOrgs = new DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsList(this, "associated_orgs", false);
  public get associatedOrgs() {
    return this._associatedOrgs;
  }

  // audience_claim - computed: true, optional: false, required: false
  public get audienceClaim() {
    return this.getListAttribute('audience_claim');
  }

  // audience_uri - computed: true, optional: false, required: false
  public get audienceUri() {
    return this.getStringAttribute('audience_uri');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // groups_claim - computed: true, optional: false, required: false
  public get groupsClaim() {
    return this.getStringAttribute('groups_claim');
  }

  // idp_id - computed: true, optional: false, required: false
  public get idpId() {
    return this.getStringAttribute('idp_id');
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
  private _pemFileInfo = new DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoList(this, "pem_file_info", false);
  public get pemFileInfo() {
    return this._pemFileInfo;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // request_binding - computed: true, optional: false, required: false
  public get requestBinding() {
    return this.getStringAttribute('request_binding');
  }

  // requested_scopes - computed: true, optional: false, required: false
  public get requestedScopes() {
    return this.getListAttribute('requested_scopes');
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

  // user_claim - computed: true, optional: false, required: false
  public get userClaim() {
    return this.getStringAttribute('user_claim');
  }
}

export class DataMongodbatlasFederatedSettingsIdentityProvidersResultsList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference {
    return new DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/data-sources/federated_settings_identity_providers mongodbatlas_federated_settings_identity_providers}
*/
export class DataMongodbatlasFederatedSettingsIdentityProviders extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_federated_settings_identity_providers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMongodbatlasFederatedSettingsIdentityProviders resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMongodbatlasFederatedSettingsIdentityProviders to import
  * @param importFromId The id of the existing DataMongodbatlasFederatedSettingsIdentityProviders that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/data-sources/federated_settings_identity_providers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMongodbatlasFederatedSettingsIdentityProviders to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_federated_settings_identity_providers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.1/docs/data-sources/federated_settings_identity_providers mongodbatlas_federated_settings_identity_providers} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMongodbatlasFederatedSettingsIdentityProvidersConfig
  */
  public constructor(scope: Construct, id: string, config: DataMongodbatlasFederatedSettingsIdentityProvidersConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_federated_settings_identity_providers',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.15.1',
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
  private _results = new DataMongodbatlasFederatedSettingsIdentityProvidersResultsList(this, "results", false);
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
