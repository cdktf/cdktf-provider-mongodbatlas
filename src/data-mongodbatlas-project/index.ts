// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/data-sources/project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMongodbatlasProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/data-sources/project#id DataMongodbatlasProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/data-sources/project#name DataMongodbatlasProject#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/data-sources/project#project_id DataMongodbatlasProject#project_id}
  */
  readonly projectId?: string;
}
export interface DataMongodbatlasProjectApiKeys {
}

export function dataMongodbatlasProjectApiKeysToTerraform(struct?: DataMongodbatlasProjectApiKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataMongodbatlasProjectApiKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasProjectApiKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasProjectApiKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key_id - computed: true, optional: false, required: false
  public get apiKeyId() {
    return this.getStringAttribute('api_key_id');
  }

  // role_names - computed: true, optional: false, required: false
  public get roleNames() {
    return this.getListAttribute('role_names');
  }
}

export class DataMongodbatlasProjectApiKeysList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasProjectApiKeysOutputReference {
    return new DataMongodbatlasProjectApiKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
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
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/data-sources/project mongodbatlas_project}
*/
export class DataMongodbatlasProject extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_project";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.8.2/docs/data-sources/project mongodbatlas_project} Data Source
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
    this._id = config.id;
    this._name = config.name;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_keys - computed: true, optional: false, required: false
  private _apiKeys = new DataMongodbatlasProjectApiKeysList(this, "api_keys", false);
  public get apiKeys() {
    return this._apiKeys;
  }

  // cluster_count - computed: true, optional: false, required: false
  public get clusterCount() {
    return this.getNumberAttribute('cluster_count');
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
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

  // is_collect_database_specifics_statistics_enabled - computed: true, optional: false, required: false
  public get isCollectDatabaseSpecificsStatisticsEnabled() {
    return this.getBooleanAttribute('is_collect_database_specifics_statistics_enabled');
  }

  // is_data_explorer_enabled - computed: true, optional: false, required: false
  public get isDataExplorerEnabled() {
    return this.getBooleanAttribute('is_data_explorer_enabled');
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }
}
