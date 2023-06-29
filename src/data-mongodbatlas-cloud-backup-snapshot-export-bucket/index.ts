// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/cloud_backup_snapshot_export_bucket
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMongodbatlasCloudBackupSnapshotExportBucketConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/cloud_backup_snapshot_export_bucket#export_bucket_id DataMongodbatlasCloudBackupSnapshotExportBucket#export_bucket_id}
  */
  readonly exportBucketId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/cloud_backup_snapshot_export_bucket#id DataMongodbatlasCloudBackupSnapshotExportBucket#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/cloud_backup_snapshot_export_bucket#project_id DataMongodbatlasCloudBackupSnapshotExportBucket#project_id}
  */
  readonly projectId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/cloud_backup_snapshot_export_bucket mongodbatlas_cloud_backup_snapshot_export_bucket}
*/
export class DataMongodbatlasCloudBackupSnapshotExportBucket extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_cloud_backup_snapshot_export_bucket";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/cloud_backup_snapshot_export_bucket mongodbatlas_cloud_backup_snapshot_export_bucket} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMongodbatlasCloudBackupSnapshotExportBucketConfig
  */
  public constructor(scope: Construct, id: string, config: DataMongodbatlasCloudBackupSnapshotExportBucketConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_cloud_backup_snapshot_export_bucket',
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
    this._exportBucketId = config.exportBucketId;
    this._id = config.id;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // cloud_provider - computed: true, optional: false, required: false
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }

  // export_bucket_id - computed: false, optional: false, required: true
  private _exportBucketId?: string; 
  public get exportBucketId() {
    return this.getStringAttribute('export_bucket_id');
  }
  public set exportBucketId(value: string) {
    this._exportBucketId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exportBucketIdInput() {
    return this._exportBucketId;
  }

  // iam_role_id - computed: true, optional: false, required: false
  public get iamRoleId() {
    return this.getStringAttribute('iam_role_id');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      export_bucket_id: cdktf.stringToTerraform(this._exportBucketId),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }
}
