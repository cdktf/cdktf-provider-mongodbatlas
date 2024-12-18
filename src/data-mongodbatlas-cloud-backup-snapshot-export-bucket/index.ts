/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.23.0/docs/data-sources/cloud_backup_snapshot_export_bucket
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMongodbatlasCloudBackupSnapshotExportBucketConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.23.0/docs/data-sources/cloud_backup_snapshot_export_bucket#export_bucket_id DataMongodbatlasCloudBackupSnapshotExportBucket#export_bucket_id}
  */
  readonly exportBucketId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.23.0/docs/data-sources/cloud_backup_snapshot_export_bucket#project_id DataMongodbatlasCloudBackupSnapshotExportBucket#project_id}
  */
  readonly projectId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.23.0/docs/data-sources/cloud_backup_snapshot_export_bucket mongodbatlas_cloud_backup_snapshot_export_bucket}
*/
export class DataMongodbatlasCloudBackupSnapshotExportBucket extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_cloud_backup_snapshot_export_bucket";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMongodbatlasCloudBackupSnapshotExportBucket resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMongodbatlasCloudBackupSnapshotExportBucket to import
  * @param importFromId The id of the existing DataMongodbatlasCloudBackupSnapshotExportBucket that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.23.0/docs/data-sources/cloud_backup_snapshot_export_bucket#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMongodbatlasCloudBackupSnapshotExportBucket to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_cloud_backup_snapshot_export_bucket", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.23.0/docs/data-sources/cloud_backup_snapshot_export_bucket mongodbatlas_cloud_backup_snapshot_export_bucket} Data Source
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
        providerVersion: '1.23.0',
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

  // role_id - computed: true, optional: false, required: false
  public get roleId() {
    return this.getStringAttribute('role_id');
  }

  // service_url - computed: true, optional: false, required: false
  public get serviceUrl() {
    return this.getStringAttribute('service_url');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      export_bucket_id: cdktf.stringToTerraform(this._exportBucketId),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      export_bucket_id: {
        value: cdktf.stringToHclTerraform(this._exportBucketId),
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
