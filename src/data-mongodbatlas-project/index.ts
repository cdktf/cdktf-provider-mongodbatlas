// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/data-sources/project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMongodbatlasProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/data-sources/project#name DataMongodbatlasProject#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/data-sources/project#project_id DataMongodbatlasProject#project_id}
  */
  readonly projectId?: string;
}
export interface DataMongodbatlasProjectIpAddressesServicesClusters {
}

export function dataMongodbatlasProjectIpAddressesServicesClustersToTerraform(struct?: DataMongodbatlasProjectIpAddressesServicesClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasProjectIpAddressesServicesClustersToHclTerraform(struct?: DataMongodbatlasProjectIpAddressesServicesClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasProjectIpAddressesServicesClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasProjectIpAddressesServicesClusters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasProjectIpAddressesServicesClusters | undefined) {
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

export class DataMongodbatlasProjectIpAddressesServicesClustersList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasProjectIpAddressesServicesClustersOutputReference {
    return new DataMongodbatlasProjectIpAddressesServicesClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasProjectIpAddressesServices {
}

export function dataMongodbatlasProjectIpAddressesServicesToTerraform(struct?: DataMongodbatlasProjectIpAddressesServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasProjectIpAddressesServicesToHclTerraform(struct?: DataMongodbatlasProjectIpAddressesServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasProjectIpAddressesServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMongodbatlasProjectIpAddressesServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasProjectIpAddressesServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clusters - computed: true, optional: false, required: false
  private _clusters = new DataMongodbatlasProjectIpAddressesServicesClustersList(this, "clusters", false);
  public get clusters() {
    return this._clusters;
  }
}
export interface DataMongodbatlasProjectIpAddresses {
}

export function dataMongodbatlasProjectIpAddressesToTerraform(struct?: DataMongodbatlasProjectIpAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasProjectIpAddressesToHclTerraform(struct?: DataMongodbatlasProjectIpAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasProjectIpAddressesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMongodbatlasProjectIpAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasProjectIpAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // services - computed: true, optional: false, required: false
  private _services = new DataMongodbatlasProjectIpAddressesServicesOutputReference(this, "services");
  public get services() {
    return this._services;
  }
}
export interface DataMongodbatlasProjectLimits {
}

export function dataMongodbatlasProjectLimitsToTerraform(struct?: DataMongodbatlasProjectLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasProjectLimitsToHclTerraform(struct?: DataMongodbatlasProjectLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasProjectLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasProjectLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasProjectLimits | undefined) {
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

export class DataMongodbatlasProjectLimitsList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasProjectLimitsOutputReference {
    return new DataMongodbatlasProjectLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasProjectTeams {
}

export function dataMongodbatlasProjectTeamsToTerraform(struct?: DataMongodbatlasProjectTeams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasProjectTeamsToHclTerraform(struct?: DataMongodbatlasProjectTeams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasProjectTeamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasProjectTeams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasProjectTeams | undefined) {
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

export class DataMongodbatlasProjectTeamsList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasProjectTeamsOutputReference {
    return new DataMongodbatlasProjectTeamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/data-sources/project mongodbatlas_project}
*/
export class DataMongodbatlasProject extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMongodbatlasProject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMongodbatlasProject to import
  * @param importFromId The id of the existing DataMongodbatlasProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/data-sources/project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMongodbatlasProject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/data-sources/project mongodbatlas_project} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMongodbatlasProjectConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataMongodbatlasProjectConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_project',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.17.5',
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
    this._name = config.name;
    this._projectId = config.projectId;
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
  private _ipAddresses = new DataMongodbatlasProjectIpAddressesOutputReference(this, "ip_addresses");
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
  private _limits = new DataMongodbatlasProjectLimitsList(this, "limits", true);
  public get limits() {
    return this._limits;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getStringAttribute('org_id');
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
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
  private _teams = new DataMongodbatlasProjectTeamsList(this, "teams", false);
  public get teams() {
    return this._teams;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
