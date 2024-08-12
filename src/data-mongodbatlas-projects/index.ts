/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.6/docs/data-sources/projects
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMongodbatlasProjectsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.6/docs/data-sources/projects#items_per_page DataMongodbatlasProjects#items_per_page}
  */
  readonly itemsPerPage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.6/docs/data-sources/projects#page_num DataMongodbatlasProjects#page_num}
  */
  readonly pageNum?: number;
}
export interface DataMongodbatlasProjectsResultsIpAddressesServicesClusters {
}

export function dataMongodbatlasProjectsResultsIpAddressesServicesClustersToTerraform(struct?: DataMongodbatlasProjectsResultsIpAddressesServicesClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasProjectsResultsIpAddressesServicesClustersToHclTerraform(struct?: DataMongodbatlasProjectsResultsIpAddressesServicesClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasProjectsResultsIpAddressesServicesClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasProjectsResultsIpAddressesServicesClusters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasProjectsResultsIpAddressesServicesClusters | undefined) {
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

export class DataMongodbatlasProjectsResultsIpAddressesServicesClustersList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasProjectsResultsIpAddressesServicesClustersOutputReference {
    return new DataMongodbatlasProjectsResultsIpAddressesServicesClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasProjectsResultsIpAddressesServices {
}

export function dataMongodbatlasProjectsResultsIpAddressesServicesToTerraform(struct?: DataMongodbatlasProjectsResultsIpAddressesServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasProjectsResultsIpAddressesServicesToHclTerraform(struct?: DataMongodbatlasProjectsResultsIpAddressesServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasProjectsResultsIpAddressesServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMongodbatlasProjectsResultsIpAddressesServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasProjectsResultsIpAddressesServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clusters - computed: true, optional: false, required: false
  private _clusters = new DataMongodbatlasProjectsResultsIpAddressesServicesClustersList(this, "clusters", false);
  public get clusters() {
    return this._clusters;
  }
}
export interface DataMongodbatlasProjectsResultsIpAddresses {
}

export function dataMongodbatlasProjectsResultsIpAddressesToTerraform(struct?: DataMongodbatlasProjectsResultsIpAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasProjectsResultsIpAddressesToHclTerraform(struct?: DataMongodbatlasProjectsResultsIpAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasProjectsResultsIpAddressesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMongodbatlasProjectsResultsIpAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasProjectsResultsIpAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // services - computed: true, optional: false, required: false
  private _services = new DataMongodbatlasProjectsResultsIpAddressesServicesOutputReference(this, "services");
  public get services() {
    return this._services;
  }
}
export interface DataMongodbatlasProjectsResultsLimits {
}

export function dataMongodbatlasProjectsResultsLimitsToTerraform(struct?: DataMongodbatlasProjectsResultsLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasProjectsResultsLimitsToHclTerraform(struct?: DataMongodbatlasProjectsResultsLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasProjectsResultsLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasProjectsResultsLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasProjectsResultsLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataMongodbatlasProjectsResultsLimitsList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasProjectsResultsLimitsOutputReference {
    return new DataMongodbatlasProjectsResultsLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasProjectsResultsTeams {
}

export function dataMongodbatlasProjectsResultsTeamsToTerraform(struct?: DataMongodbatlasProjectsResultsTeams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasProjectsResultsTeamsToHclTerraform(struct?: DataMongodbatlasProjectsResultsTeams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasProjectsResultsTeamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasProjectsResultsTeams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasProjectsResultsTeams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // role_names - computed: true, optional: false, required: false
  public get roleNames() {
    return this.getListAttribute('role_names');
  }

  // team_id - computed: true, optional: false, required: false
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
}

export class DataMongodbatlasProjectsResultsTeamsList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasProjectsResultsTeamsOutputReference {
    return new DataMongodbatlasProjectsResultsTeamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasProjectsResults {
}

export function dataMongodbatlasProjectsResultsToTerraform(struct?: DataMongodbatlasProjectsResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasProjectsResultsToHclTerraform(struct?: DataMongodbatlasProjectsResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasProjectsResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasProjectsResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasProjectsResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

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
  private _ipAddresses = new DataMongodbatlasProjectsResultsIpAddressesOutputReference(this, "ip_addresses");
  public get ipAddresses() {
    return this._ipAddresses;
  }

  // is_collect_database_specifics_statistics_enabled - computed: true, optional: false, required: false
  public get isCollectDatabaseSpecificsStatisticsEnabled() {
    return this.getBooleanAttribute('is_collect_database_specifics_statistics_enabled');
  }

  // is_data_explorer_enabled - computed: true, optional: false, required: false
  public get isDataExplorerEnabled() {
    return this.getBooleanAttribute('is_data_explorer_enabled');
  }

  // is_extended_storage_sizes_enabled - computed: true, optional: false, required: false
  public get isExtendedStorageSizesEnabled() {
    return this.getBooleanAttribute('is_extended_storage_sizes_enabled');
  }

  // is_performance_advisor_enabled - computed: true, optional: false, required: false
  public get isPerformanceAdvisorEnabled() {
    return this.getBooleanAttribute('is_performance_advisor_enabled');
  }

  // is_realtime_performance_panel_enabled - computed: true, optional: false, required: false
  public get isRealtimePerformancePanelEnabled() {
    return this.getBooleanAttribute('is_realtime_performance_panel_enabled');
  }

  // is_schema_advisor_enabled - computed: true, optional: false, required: false
  public get isSchemaAdvisorEnabled() {
    return this.getBooleanAttribute('is_schema_advisor_enabled');
  }

  // limits - computed: true, optional: false, required: false
  private _limits = new DataMongodbatlasProjectsResultsLimitsList(this, "limits", true);
  public get limits() {
    return this._limits;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getStringAttribute('org_id');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // region_usage_restrictions - computed: true, optional: false, required: false
  public get regionUsageRestrictions() {
    return this.getStringAttribute('region_usage_restrictions');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // teams - computed: true, optional: false, required: false
  private _teams = new DataMongodbatlasProjectsResultsTeamsList(this, "teams", false);
  public get teams() {
    return this._teams;
  }
}

export class DataMongodbatlasProjectsResultsList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasProjectsResultsOutputReference {
    return new DataMongodbatlasProjectsResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.6/docs/data-sources/projects mongodbatlas_projects}
*/
export class DataMongodbatlasProjects extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_projects";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMongodbatlasProjects resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMongodbatlasProjects to import
  * @param importFromId The id of the existing DataMongodbatlasProjects that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.6/docs/data-sources/projects#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMongodbatlasProjects to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_projects", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.6/docs/data-sources/projects mongodbatlas_projects} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMongodbatlasProjectsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataMongodbatlasProjectsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_projects',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.17.6',
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
    this._itemsPerPage = config.itemsPerPage;
    this._pageNum = config.pageNum;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
  private _results = new DataMongodbatlasProjectsResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      items_per_page: cdktf.numberToTerraform(this._itemsPerPage),
      page_num: cdktf.numberToTerraform(this._pageNum),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
