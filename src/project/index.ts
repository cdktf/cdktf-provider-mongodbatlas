/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs/resources/project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs/resources/project#is_collect_database_specifics_statistics_enabled Project#is_collect_database_specifics_statistics_enabled}
  */
  readonly isCollectDatabaseSpecificsStatisticsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs/resources/project#is_data_explorer_enabled Project#is_data_explorer_enabled}
  */
  readonly isDataExplorerEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs/resources/project#is_extended_storage_sizes_enabled Project#is_extended_storage_sizes_enabled}
  */
  readonly isExtendedStorageSizesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs/resources/project#is_performance_advisor_enabled Project#is_performance_advisor_enabled}
  */
  readonly isPerformanceAdvisorEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs/resources/project#is_realtime_performance_panel_enabled Project#is_realtime_performance_panel_enabled}
  */
  readonly isRealtimePerformancePanelEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs/resources/project#is_schema_advisor_enabled Project#is_schema_advisor_enabled}
  */
  readonly isSchemaAdvisorEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs/resources/project#name Project#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs/resources/project#org_id Project#org_id}
  */
  readonly orgId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs/resources/project#project_owner_id Project#project_owner_id}
  */
  readonly projectOwnerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs/resources/project#region_usage_restrictions Project#region_usage_restrictions}
  */
  readonly regionUsageRestrictions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs/resources/project#tags Project#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs/resources/project#with_default_alerts_settings Project#with_default_alerts_settings}
  */
  readonly withDefaultAlertsSettings?: boolean | cdktf.IResolvable;
  /**
  * limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs/resources/project#limits Project#limits}
  */
  readonly limits?: ProjectLimits[] | cdktf.IResolvable;
  /**
  * teams block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs/resources/project#teams Project#teams}
  */
  readonly teams?: ProjectTeams[] | cdktf.IResolvable;
}
export interface ProjectIpAddressesServicesClusters {
}

export function projectIpAddressesServicesClustersToTerraform(struct?: ProjectIpAddressesServicesClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectIpAddressesServicesClustersToHclTerraform(struct?: ProjectIpAddressesServicesClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectIpAddressesServicesClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectIpAddressesServicesClusters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectIpAddressesServicesClusters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // inbound - computed: true, optional: false, required: false
  public get inbound() {
    return this.getListAttribute('inbound');
  }

  // outbound - computed: true, optional: false, required: false
  public get outbound() {
    return this.getListAttribute('outbound');
  }
}

export class ProjectIpAddressesServicesClustersList extends cdktf.ComplexList {

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
  public get(index: number): ProjectIpAddressesServicesClustersOutputReference {
    return new ProjectIpAddressesServicesClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectIpAddressesServices {
}

export function projectIpAddressesServicesToTerraform(struct?: ProjectIpAddressesServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectIpAddressesServicesToHclTerraform(struct?: ProjectIpAddressesServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectIpAddressesServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ProjectIpAddressesServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectIpAddressesServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clusters - computed: true, optional: false, required: false
  private _clusters = new ProjectIpAddressesServicesClustersList(this, "clusters", false);
  public get clusters() {
    return this._clusters;
  }
}
export interface ProjectIpAddresses {
}

export function projectIpAddressesToTerraform(struct?: ProjectIpAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectIpAddressesToHclTerraform(struct?: ProjectIpAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectIpAddressesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ProjectIpAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectIpAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // services - computed: true, optional: false, required: false
  private _services = new ProjectIpAddressesServicesOutputReference(this, "services");
  public get services() {
    return this._services;
  }
}
export interface ProjectLimits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs/resources/project#name Project#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs/resources/project#value Project#value}
  */
  readonly value: number;
}

export function projectLimitsToTerraform(struct?: ProjectLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function projectLimitsToHclTerraform(struct?: ProjectLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // current_usage - computed: true, optional: false, required: false
  public get currentUsage() {
    return this.getNumberAttribute('current_usage');
  }

  // default_limit - computed: true, optional: false, required: false
  public get defaultLimit() {
    return this.getNumberAttribute('default_limit');
  }

  // maximum_limit - computed: true, optional: false, required: false
  public get maximumLimit() {
    return this.getNumberAttribute('maximum_limit');
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

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ProjectLimitsList extends cdktf.ComplexList {
  public internalValue? : ProjectLimits[] | cdktf.IResolvable

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
  public get(index: number): ProjectLimitsOutputReference {
    return new ProjectLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectTeams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs/resources/project#role_names Project#role_names}
  */
  readonly roleNames: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs/resources/project#team_id Project#team_id}
  */
  readonly teamId: string;
}

export function projectTeamsToTerraform(struct?: ProjectTeams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roleNames),
    team_id: cdktf.stringToTerraform(struct!.teamId),
  }
}


export function projectTeamsToHclTerraform(struct?: ProjectTeams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roleNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    team_id: {
      value: cdktf.stringToHclTerraform(struct!.teamId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectTeamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectTeams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleNames = this._roleNames;
    }
    if (this._teamId !== undefined) {
      hasAnyValues = true;
      internalValueResult.teamId = this._teamId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectTeams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roleNames = undefined;
      this._teamId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roleNames = value.roleNames;
      this._teamId = value.teamId;
    }
  }

  // role_names - computed: false, optional: false, required: true
  private _roleNames?: string[]; 
  public get roleNames() {
    return cdktf.Fn.tolist(this.getListAttribute('role_names'));
  }
  public set roleNames(value: string[]) {
    this._roleNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNamesInput() {
    return this._roleNames;
  }

  // team_id - computed: false, optional: false, required: true
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }
}

export class ProjectTeamsList extends cdktf.ComplexList {
  public internalValue? : ProjectTeams[] | cdktf.IResolvable

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
  public get(index: number): ProjectTeamsOutputReference {
    return new ProjectTeamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs/resources/project mongodbatlas_project}
*/
export class Project extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Project to import
  * @param importFromId The id of the existing Project that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs/resources/project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Project to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.1/docs/resources/project mongodbatlas_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_project',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.16.1',
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
    this._isCollectDatabaseSpecificsStatisticsEnabled = config.isCollectDatabaseSpecificsStatisticsEnabled;
    this._isDataExplorerEnabled = config.isDataExplorerEnabled;
    this._isExtendedStorageSizesEnabled = config.isExtendedStorageSizesEnabled;
    this._isPerformanceAdvisorEnabled = config.isPerformanceAdvisorEnabled;
    this._isRealtimePerformancePanelEnabled = config.isRealtimePerformancePanelEnabled;
    this._isSchemaAdvisorEnabled = config.isSchemaAdvisorEnabled;
    this._name = config.name;
    this._orgId = config.orgId;
    this._projectOwnerId = config.projectOwnerId;
    this._regionUsageRestrictions = config.regionUsageRestrictions;
    this._tags = config.tags;
    this._withDefaultAlertsSettings = config.withDefaultAlertsSettings;
    this._limits.internalValue = config.limits;
    this._teams.internalValue = config.teams;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_count - computed: true, optional: false, required: false
  public get clusterCount() {
    return this.getNumberAttribute('cluster_count');
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_addresses - computed: true, optional: false, required: false
  private _ipAddresses = new ProjectIpAddressesOutputReference(this, "ip_addresses");
  public get ipAddresses() {
    return this._ipAddresses;
  }

  // is_collect_database_specifics_statistics_enabled - computed: true, optional: true, required: false
  private _isCollectDatabaseSpecificsStatisticsEnabled?: boolean | cdktf.IResolvable; 
  public get isCollectDatabaseSpecificsStatisticsEnabled() {
    return this.getBooleanAttribute('is_collect_database_specifics_statistics_enabled');
  }
  public set isCollectDatabaseSpecificsStatisticsEnabled(value: boolean | cdktf.IResolvable) {
    this._isCollectDatabaseSpecificsStatisticsEnabled = value;
  }
  public resetIsCollectDatabaseSpecificsStatisticsEnabled() {
    this._isCollectDatabaseSpecificsStatisticsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCollectDatabaseSpecificsStatisticsEnabledInput() {
    return this._isCollectDatabaseSpecificsStatisticsEnabled;
  }

  // is_data_explorer_enabled - computed: true, optional: true, required: false
  private _isDataExplorerEnabled?: boolean | cdktf.IResolvable; 
  public get isDataExplorerEnabled() {
    return this.getBooleanAttribute('is_data_explorer_enabled');
  }
  public set isDataExplorerEnabled(value: boolean | cdktf.IResolvable) {
    this._isDataExplorerEnabled = value;
  }
  public resetIsDataExplorerEnabled() {
    this._isDataExplorerEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDataExplorerEnabledInput() {
    return this._isDataExplorerEnabled;
  }

  // is_extended_storage_sizes_enabled - computed: true, optional: true, required: false
  private _isExtendedStorageSizesEnabled?: boolean | cdktf.IResolvable; 
  public get isExtendedStorageSizesEnabled() {
    return this.getBooleanAttribute('is_extended_storage_sizes_enabled');
  }
  public set isExtendedStorageSizesEnabled(value: boolean | cdktf.IResolvable) {
    this._isExtendedStorageSizesEnabled = value;
  }
  public resetIsExtendedStorageSizesEnabled() {
    this._isExtendedStorageSizesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isExtendedStorageSizesEnabledInput() {
    return this._isExtendedStorageSizesEnabled;
  }

  // is_performance_advisor_enabled - computed: true, optional: true, required: false
  private _isPerformanceAdvisorEnabled?: boolean | cdktf.IResolvable; 
  public get isPerformanceAdvisorEnabled() {
    return this.getBooleanAttribute('is_performance_advisor_enabled');
  }
  public set isPerformanceAdvisorEnabled(value: boolean | cdktf.IResolvable) {
    this._isPerformanceAdvisorEnabled = value;
  }
  public resetIsPerformanceAdvisorEnabled() {
    this._isPerformanceAdvisorEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPerformanceAdvisorEnabledInput() {
    return this._isPerformanceAdvisorEnabled;
  }

  // is_realtime_performance_panel_enabled - computed: true, optional: true, required: false
  private _isRealtimePerformancePanelEnabled?: boolean | cdktf.IResolvable; 
  public get isRealtimePerformancePanelEnabled() {
    return this.getBooleanAttribute('is_realtime_performance_panel_enabled');
  }
  public set isRealtimePerformancePanelEnabled(value: boolean | cdktf.IResolvable) {
    this._isRealtimePerformancePanelEnabled = value;
  }
  public resetIsRealtimePerformancePanelEnabled() {
    this._isRealtimePerformancePanelEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRealtimePerformancePanelEnabledInput() {
    return this._isRealtimePerformancePanelEnabled;
  }

  // is_schema_advisor_enabled - computed: true, optional: true, required: false
  private _isSchemaAdvisorEnabled?: boolean | cdktf.IResolvable; 
  public get isSchemaAdvisorEnabled() {
    return this.getBooleanAttribute('is_schema_advisor_enabled');
  }
  public set isSchemaAdvisorEnabled(value: boolean | cdktf.IResolvable) {
    this._isSchemaAdvisorEnabled = value;
  }
  public resetIsSchemaAdvisorEnabled() {
    this._isSchemaAdvisorEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSchemaAdvisorEnabledInput() {
    return this._isSchemaAdvisorEnabled;
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

  // project_owner_id - computed: false, optional: true, required: false
  private _projectOwnerId?: string; 
  public get projectOwnerId() {
    return this.getStringAttribute('project_owner_id');
  }
  public set projectOwnerId(value: string) {
    this._projectOwnerId = value;
  }
  public resetProjectOwnerId() {
    this._projectOwnerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectOwnerIdInput() {
    return this._projectOwnerId;
  }

  // region_usage_restrictions - computed: true, optional: true, required: false
  private _regionUsageRestrictions?: string; 
  public get regionUsageRestrictions() {
    return this.getStringAttribute('region_usage_restrictions');
  }
  public set regionUsageRestrictions(value: string) {
    this._regionUsageRestrictions = value;
  }
  public resetRegionUsageRestrictions() {
    this._regionUsageRestrictions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionUsageRestrictionsInput() {
    return this._regionUsageRestrictions;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // with_default_alerts_settings - computed: true, optional: true, required: false
  private _withDefaultAlertsSettings?: boolean | cdktf.IResolvable; 
  public get withDefaultAlertsSettings() {
    return this.getBooleanAttribute('with_default_alerts_settings');
  }
  public set withDefaultAlertsSettings(value: boolean | cdktf.IResolvable) {
    this._withDefaultAlertsSettings = value;
  }
  public resetWithDefaultAlertsSettings() {
    this._withDefaultAlertsSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withDefaultAlertsSettingsInput() {
    return this._withDefaultAlertsSettings;
  }

  // limits - computed: false, optional: true, required: false
  private _limits = new ProjectLimitsList(this, "limits", true);
  public get limits() {
    return this._limits;
  }
  public putLimits(value: ProjectLimits[] | cdktf.IResolvable) {
    this._limits.internalValue = value;
  }
  public resetLimits() {
    this._limits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits.internalValue;
  }

  // teams - computed: false, optional: true, required: false
  private _teams = new ProjectTeamsList(this, "teams", true);
  public get teams() {
    return this._teams;
  }
  public putTeams(value: ProjectTeams[] | cdktf.IResolvable) {
    this._teams.internalValue = value;
  }
  public resetTeams() {
    this._teams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamsInput() {
    return this._teams.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      is_collect_database_specifics_statistics_enabled: cdktf.booleanToTerraform(this._isCollectDatabaseSpecificsStatisticsEnabled),
      is_data_explorer_enabled: cdktf.booleanToTerraform(this._isDataExplorerEnabled),
      is_extended_storage_sizes_enabled: cdktf.booleanToTerraform(this._isExtendedStorageSizesEnabled),
      is_performance_advisor_enabled: cdktf.booleanToTerraform(this._isPerformanceAdvisorEnabled),
      is_realtime_performance_panel_enabled: cdktf.booleanToTerraform(this._isRealtimePerformancePanelEnabled),
      is_schema_advisor_enabled: cdktf.booleanToTerraform(this._isSchemaAdvisorEnabled),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_owner_id: cdktf.stringToTerraform(this._projectOwnerId),
      region_usage_restrictions: cdktf.stringToTerraform(this._regionUsageRestrictions),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      with_default_alerts_settings: cdktf.booleanToTerraform(this._withDefaultAlertsSettings),
      limits: cdktf.listMapper(projectLimitsToTerraform, true)(this._limits.internalValue),
      teams: cdktf.listMapper(projectTeamsToTerraform, true)(this._teams.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      is_collect_database_specifics_statistics_enabled: {
        value: cdktf.booleanToHclTerraform(this._isCollectDatabaseSpecificsStatisticsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_data_explorer_enabled: {
        value: cdktf.booleanToHclTerraform(this._isDataExplorerEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_extended_storage_sizes_enabled: {
        value: cdktf.booleanToHclTerraform(this._isExtendedStorageSizesEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_performance_advisor_enabled: {
        value: cdktf.booleanToHclTerraform(this._isPerformanceAdvisorEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_realtime_performance_panel_enabled: {
        value: cdktf.booleanToHclTerraform(this._isRealtimePerformancePanelEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_schema_advisor_enabled: {
        value: cdktf.booleanToHclTerraform(this._isSchemaAdvisorEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      project_owner_id: {
        value: cdktf.stringToHclTerraform(this._projectOwnerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_usage_restrictions: {
        value: cdktf.stringToHclTerraform(this._regionUsageRestrictions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      with_default_alerts_settings: {
        value: cdktf.booleanToHclTerraform(this._withDefaultAlertsSettings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      limits: {
        value: cdktf.listMapperHcl(projectLimitsToHclTerraform, true)(this._limits.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ProjectLimitsList",
      },
      teams: {
        value: cdktf.listMapperHcl(projectTeamsToHclTerraform, true)(this._teams.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ProjectTeamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
