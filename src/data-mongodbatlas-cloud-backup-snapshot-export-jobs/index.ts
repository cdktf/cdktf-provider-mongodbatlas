// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/data-sources/cloud_backup_snapshot_export_jobs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMongodbatlasCloudBackupSnapshotExportJobsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/data-sources/cloud_backup_snapshot_export_jobs#cluster_name DataMongodbatlasCloudBackupSnapshotExportJobs#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/data-sources/cloud_backup_snapshot_export_jobs#id DataMongodbatlasCloudBackupSnapshotExportJobs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/data-sources/cloud_backup_snapshot_export_jobs#items_per_page DataMongodbatlasCloudBackupSnapshotExportJobs#items_per_page}
  */
  readonly itemsPerPage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/data-sources/cloud_backup_snapshot_export_jobs#page_num DataMongodbatlasCloudBackupSnapshotExportJobs#page_num}
  */
  readonly pageNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/data-sources/cloud_backup_snapshot_export_jobs#project_id DataMongodbatlasCloudBackupSnapshotExportJobs#project_id}
  */
  readonly projectId: string;
}
export interface DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponents {
}

export function dataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsToTerraform(struct?: DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsToHclTerraform(struct?: DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // export_id - computed: true, optional: false, required: false
  public get exportId() {
    return this.getStringAttribute('export_id');
  }

  // replica_set_name - computed: true, optional: false, required: false
  public get replicaSetName() {
    return this.getStringAttribute('replica_set_name');
  }
}

export class DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference {
    return new DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomData {
}

export function dataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataToTerraform(struct?: DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataToHclTerraform(struct?: DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference {
    return new DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasCloudBackupSnapshotExportJobsResults {
}

export function dataMongodbatlasCloudBackupSnapshotExportJobsResultsToTerraform(struct?: DataMongodbatlasCloudBackupSnapshotExportJobsResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasCloudBackupSnapshotExportJobsResultsToHclTerraform(struct?: DataMongodbatlasCloudBackupSnapshotExportJobsResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasCloudBackupSnapshotExportJobsResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasCloudBackupSnapshotExportJobsResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // components - computed: true, optional: false, required: false
  private _components = new DataMongodbatlasCloudBackupSnapshotExportJobsResultsComponentsList(this, "components", true);
  public get components() {
    return this._components;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // custom_data - computed: true, optional: false, required: false
  private _customData = new DataMongodbatlasCloudBackupSnapshotExportJobsResultsCustomDataList(this, "custom_data", true);
  public get customData() {
    return this._customData;
  }

  // err_msg - computed: true, optional: false, required: false
  public get errMsg() {
    return this.getStringAttribute('err_msg');
  }

  // export_bucket_id - computed: true, optional: false, required: false
  public get exportBucketId() {
    return this.getStringAttribute('export_bucket_id');
  }

  // export_job_id - computed: true, optional: false, required: false
  public get exportJobId() {
    return this.getStringAttribute('export_job_id');
  }

  // export_status_exported_collections - computed: true, optional: false, required: false
  public get exportStatusExportedCollections() {
    return this.getNumberAttribute('export_status_exported_collections');
  }

  // export_status_total_collections - computed: true, optional: false, required: false
  public get exportStatusTotalCollections() {
    return this.getNumberAttribute('export_status_total_collections');
  }

  // finished_at - computed: true, optional: false, required: false
  public get finishedAt() {
    return this.getStringAttribute('finished_at');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // snapshot_id - computed: true, optional: false, required: false
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class DataMongodbatlasCloudBackupSnapshotExportJobsResultsList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference {
    return new DataMongodbatlasCloudBackupSnapshotExportJobsResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/data-sources/cloud_backup_snapshot_export_jobs mongodbatlas_cloud_backup_snapshot_export_jobs}
*/
export class DataMongodbatlasCloudBackupSnapshotExportJobs extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_cloud_backup_snapshot_export_jobs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMongodbatlasCloudBackupSnapshotExportJobs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMongodbatlasCloudBackupSnapshotExportJobs to import
  * @param importFromId The id of the existing DataMongodbatlasCloudBackupSnapshotExportJobs that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/data-sources/cloud_backup_snapshot_export_jobs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMongodbatlasCloudBackupSnapshotExportJobs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_cloud_backup_snapshot_export_jobs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.0/docs/data-sources/cloud_backup_snapshot_export_jobs mongodbatlas_cloud_backup_snapshot_export_jobs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMongodbatlasCloudBackupSnapshotExportJobsConfig
  */
  public constructor(scope: Construct, id: string, config: DataMongodbatlasCloudBackupSnapshotExportJobsConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_cloud_backup_snapshot_export_jobs',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.15.0',
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
    this._clusterName = config.clusterName;
    this._id = config.id;
    this._itemsPerPage = config.itemsPerPage;
    this._pageNum = config.pageNum;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
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

  // results - computed: true, optional: false, required: false
  private _results = new DataMongodbatlasCloudBackupSnapshotExportJobsResultsList(this, "results", false);
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
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      id: cdktf.stringToTerraform(this._id),
      items_per_page: cdktf.numberToTerraform(this._itemsPerPage),
      page_num: cdktf.numberToTerraform(this._pageNum),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
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
