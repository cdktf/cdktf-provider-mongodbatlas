/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/cloud_backup_snapshot_export_bucket
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudBackupSnapshotExportBucketConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/cloud_backup_snapshot_export_bucket#bucket_name CloudBackupSnapshotExportBucket#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/cloud_backup_snapshot_export_bucket#cloud_provider CloudBackupSnapshotExportBucket#cloud_provider}
  */
  readonly cloudProvider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/cloud_backup_snapshot_export_bucket#iam_role_id CloudBackupSnapshotExportBucket#iam_role_id}
  */
  readonly iamRoleId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/cloud_backup_snapshot_export_bucket#project_id CloudBackupSnapshotExportBucket#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/cloud_backup_snapshot_export_bucket#role_id CloudBackupSnapshotExportBucket#role_id}
  */
  readonly roleId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/cloud_backup_snapshot_export_bucket#service_url CloudBackupSnapshotExportBucket#service_url}
  */
  readonly serviceUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/cloud_backup_snapshot_export_bucket#tenant_id CloudBackupSnapshotExportBucket#tenant_id}
  */
  readonly tenantId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/cloud_backup_snapshot_export_bucket mongodbatlas_cloud_backup_snapshot_export_bucket}
*/
export class CloudBackupSnapshotExportBucket extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_cloud_backup_snapshot_export_bucket";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudBackupSnapshotExportBucket resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudBackupSnapshotExportBucket to import
  * @param importFromId The id of the existing CloudBackupSnapshotExportBucket that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/cloud_backup_snapshot_export_bucket#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudBackupSnapshotExportBucket to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_cloud_backup_snapshot_export_bucket", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/cloud_backup_snapshot_export_bucket mongodbatlas_cloud_backup_snapshot_export_bucket} Resource
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
        providerVersion: '1.38.0',
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
    this._roleId = config.roleId;
    this._serviceUrl = config.serviceUrl;
    this._tenantId = config.tenantId;
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

  // iam_role_id - computed: false, optional: true, required: false
  private _iamRoleId?: string; 
  public get iamRoleId() {
    return this.getStringAttribute('iam_role_id');
  }
  public set iamRoleId(value: string) {
    this._iamRoleId = value;
  }
  public resetIamRoleId() {
    this._iamRoleId = undefined;
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

  // role_id - computed: false, optional: true, required: false
  private _roleId?: string; 
  public get roleId() {
    return this.getStringAttribute('role_id');
  }
  public set roleId(value: string) {
    this._roleId = value;
  }
  public resetRoleId() {
    this._roleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId;
  }

  // service_url - computed: false, optional: true, required: false
  private _serviceUrl?: string; 
  public get serviceUrl() {
    return this.getStringAttribute('service_url');
  }
  public set serviceUrl(value: string) {
    this._serviceUrl = value;
  }
  public resetServiceUrl() {
    this._serviceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceUrlInput() {
    return this._serviceUrl;
  }

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
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
      role_id: cdktf.stringToTerraform(this._roleId),
      service_url: cdktf.stringToTerraform(this._serviceUrl),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket_name: {
        value: cdktf.stringToHclTerraform(this._bucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_provider: {
        value: cdktf.stringToHclTerraform(this._cloudProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iam_role_id: {
        value: cdktf.stringToHclTerraform(this._iamRoleId),
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
      role_id: {
        value: cdktf.stringToHclTerraform(this._roleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_url: {
        value: cdktf.stringToHclTerraform(this._serviceUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
