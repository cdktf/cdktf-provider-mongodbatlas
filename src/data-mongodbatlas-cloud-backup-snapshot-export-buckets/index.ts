// https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_backup_snapshot_export_buckets
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMongodbatlasCloudBackupSnapshotExportBucketsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_backup_snapshot_export_buckets#id DataMongodbatlasCloudBackupSnapshotExportBuckets#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_backup_snapshot_export_buckets#items_per_page DataMongodbatlasCloudBackupSnapshotExportBuckets#items_per_page}
  */
  readonly itemsPerPage?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_backup_snapshot_export_buckets#page_num DataMongodbatlasCloudBackupSnapshotExportBuckets#page_num}
  */
  readonly pageNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_backup_snapshot_export_buckets#project_id DataMongodbatlasCloudBackupSnapshotExportBuckets#project_id}
  */
  readonly projectId: string;
}
export interface DataMongodbatlasCloudBackupSnapshotExportBucketsResults {
}

export function dataMongodbatlasCloudBackupSnapshotExportBucketsResultsToTerraform(struct?: DataMongodbatlasCloudBackupSnapshotExportBucketsResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataMongodbatlasCloudBackupSnapshotExportBucketsResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasCloudBackupSnapshotExportBucketsResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasCloudBackupSnapshotExportBucketsResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // cloud_provider - computed: true, optional: false, required: false
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }

  // export_bucket_id - computed: true, optional: false, required: false
  public get exportBucketId() {
    return this.getStringAttribute('export_bucket_id');
  }

  // iam_role_id - computed: true, optional: false, required: false
  public get iamRoleId() {
    return this.getStringAttribute('iam_role_id');
  }
}

export class DataMongodbatlasCloudBackupSnapshotExportBucketsResultsList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasCloudBackupSnapshotExportBucketsResultsOutputReference {
    return new DataMongodbatlasCloudBackupSnapshotExportBucketsResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_backup_snapshot_export_buckets mongodbatlas_cloud_backup_snapshot_export_buckets}
*/
export class DataMongodbatlasCloudBackupSnapshotExportBuckets extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_cloud_backup_snapshot_export_buckets";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/mongodbatlas/d/cloud_backup_snapshot_export_buckets mongodbatlas_cloud_backup_snapshot_export_buckets} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMongodbatlasCloudBackupSnapshotExportBucketsConfig
  */
  public constructor(scope: Construct, id: string, config: DataMongodbatlasCloudBackupSnapshotExportBucketsConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_cloud_backup_snapshot_export_buckets',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.8.1',
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
    this._itemsPerPage = config.itemsPerPage;
    this._pageNum = config.pageNum;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  private _results = new DataMongodbatlasCloudBackupSnapshotExportBucketsResultsList(this, "results", false);
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
      id: cdktf.stringToTerraform(this._id),
      items_per_page: cdktf.numberToTerraform(this._itemsPerPage),
      page_num: cdktf.numberToTerraform(this._pageNum),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }
}
