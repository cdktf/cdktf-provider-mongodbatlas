// https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_export_bucket
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudBackupSnapshotExportBucketConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_export_bucket#bucket_name CloudBackupSnapshotExportBucket#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_export_bucket#cloud_provider CloudBackupSnapshotExportBucket#cloud_provider}
  */
  readonly cloudProvider: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_export_bucket#iam_role_id CloudBackupSnapshotExportBucket#iam_role_id}
  */
  readonly iamRoleId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_export_bucket#project_id CloudBackupSnapshotExportBucket#project_id}
  */
  readonly projectId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_export_bucket mongodbatlas_cloud_backup_snapshot_export_bucket}
*/
export class CloudBackupSnapshotExportBucket extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_cloud_backup_snapshot_export_bucket";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_backup_snapshot_export_bucket mongodbatlas_cloud_backup_snapshot_export_bucket} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudBackupSnapshotExportBucketConfig
  */
  public constructor(scope: Construct, id: string, config: CloudBackupSnapshotExportBucketConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_cloud_backup_snapshot_export_bucket',
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
    this._bucketName = config.bucketName;
    this._cloudProvider = config.cloudProvider;
    this._iamRoleId = config.iamRoleId;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // cloud_provider - computed: false, optional: false, required: true
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
  }

  // export_bucket_id - computed: true, optional: false, required: false
  public get exportBucketId() {
    return this.getStringAttribute('export_bucket_id');
  }

  // iam_role_id - computed: false, optional: false, required: true
  private _iamRoleId?: string; 
  public get iamRoleId() {
    return this.getStringAttribute('iam_role_id');
  }
  public set iamRoleId(value: string) {
    this._iamRoleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleIdInput() {
    return this._iamRoleId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
      bucket_name: cdktf.stringToTerraform(this._bucketName),
      cloud_provider: cdktf.stringToTerraform(this._cloudProvider),
      iam_role_id: cdktf.stringToTerraform(this._iamRoleId),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }
}
