/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.2/docs/resources/cloud_backup_snapshot_restore_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudBackupSnapshotRestoreJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.2/docs/resources/cloud_backup_snapshot_restore_job#cluster_name CloudBackupSnapshotRestoreJob#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.2/docs/resources/cloud_backup_snapshot_restore_job#id CloudBackupSnapshotRestoreJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.2/docs/resources/cloud_backup_snapshot_restore_job#project_id CloudBackupSnapshotRestoreJob#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.2/docs/resources/cloud_backup_snapshot_restore_job#snapshot_id CloudBackupSnapshotRestoreJob#snapshot_id}
  */
  readonly snapshotId: string;
  /**
  * delivery_type_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.2/docs/resources/cloud_backup_snapshot_restore_job#delivery_type_config CloudBackupSnapshotRestoreJob#delivery_type_config}
  */
  readonly deliveryTypeConfig?: CloudBackupSnapshotRestoreJobDeliveryTypeConfig;
}
export interface CloudBackupSnapshotRestoreJobDeliveryTypeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.2/docs/resources/cloud_backup_snapshot_restore_job#automated CloudBackupSnapshotRestoreJob#automated}
  */
  readonly automated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.2/docs/resources/cloud_backup_snapshot_restore_job#download CloudBackupSnapshotRestoreJob#download}
  */
  readonly download?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.2/docs/resources/cloud_backup_snapshot_restore_job#oplog_inc CloudBackupSnapshotRestoreJob#oplog_inc}
  */
  readonly oplogInc?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.2/docs/resources/cloud_backup_snapshot_restore_job#oplog_ts CloudBackupSnapshotRestoreJob#oplog_ts}
  */
  readonly oplogTs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.2/docs/resources/cloud_backup_snapshot_restore_job#point_in_time CloudBackupSnapshotRestoreJob#point_in_time}
  */
  readonly pointInTime?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.2/docs/resources/cloud_backup_snapshot_restore_job#point_in_time_utc_seconds CloudBackupSnapshotRestoreJob#point_in_time_utc_seconds}
  */
  readonly pointInTimeUtcSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.2/docs/resources/cloud_backup_snapshot_restore_job#target_cluster_name CloudBackupSnapshotRestoreJob#target_cluster_name}
  */
  readonly targetClusterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.2/docs/resources/cloud_backup_snapshot_restore_job#target_project_id CloudBackupSnapshotRestoreJob#target_project_id}
  */
  readonly targetProjectId?: string;
}

export function cloudBackupSnapshotRestoreJobDeliveryTypeConfigToTerraform(struct?: CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference | CloudBackupSnapshotRestoreJobDeliveryTypeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automated: cdktf.booleanToTerraform(struct!.automated),
    download: cdktf.booleanToTerraform(struct!.download),
    oplog_inc: cdktf.numberToTerraform(struct!.oplogInc),
    oplog_ts: cdktf.numberToTerraform(struct!.oplogTs),
    point_in_time: cdktf.booleanToTerraform(struct!.pointInTime),
    point_in_time_utc_seconds: cdktf.numberToTerraform(struct!.pointInTimeUtcSeconds),
    target_cluster_name: cdktf.stringToTerraform(struct!.targetClusterName),
    target_project_id: cdktf.stringToTerraform(struct!.targetProjectId),
  }
}

export class CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudBackupSnapshotRestoreJobDeliveryTypeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automated !== undefined) {
      hasAnyValues = true;
      internalValueResult.automated = this._automated;
    }
    if (this._download !== undefined) {
      hasAnyValues = true;
      internalValueResult.download = this._download;
    }
    if (this._oplogInc !== undefined) {
      hasAnyValues = true;
      internalValueResult.oplogInc = this._oplogInc;
    }
    if (this._oplogTs !== undefined) {
      hasAnyValues = true;
      internalValueResult.oplogTs = this._oplogTs;
    }
    if (this._pointInTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.pointInTime = this._pointInTime;
    }
    if (this._pointInTimeUtcSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.pointInTimeUtcSeconds = this._pointInTimeUtcSeconds;
    }
    if (this._targetClusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetClusterName = this._targetClusterName;
    }
    if (this._targetProjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetProjectId = this._targetProjectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudBackupSnapshotRestoreJobDeliveryTypeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._automated = undefined;
      this._download = undefined;
      this._oplogInc = undefined;
      this._oplogTs = undefined;
      this._pointInTime = undefined;
      this._pointInTimeUtcSeconds = undefined;
      this._targetClusterName = undefined;
      this._targetProjectId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._automated = value.automated;
      this._download = value.download;
      this._oplogInc = value.oplogInc;
      this._oplogTs = value.oplogTs;
      this._pointInTime = value.pointInTime;
      this._pointInTimeUtcSeconds = value.pointInTimeUtcSeconds;
      this._targetClusterName = value.targetClusterName;
      this._targetProjectId = value.targetProjectId;
    }
  }

  // automated - computed: false, optional: true, required: false
  private _automated?: boolean | cdktf.IResolvable; 
  public get automated() {
    return this.getBooleanAttribute('automated');
  }
  public set automated(value: boolean | cdktf.IResolvable) {
    this._automated = value;
  }
  public resetAutomated() {
    this._automated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automatedInput() {
    return this._automated;
  }

  // download - computed: false, optional: true, required: false
  private _download?: boolean | cdktf.IResolvable; 
  public get download() {
    return this.getBooleanAttribute('download');
  }
  public set download(value: boolean | cdktf.IResolvable) {
    this._download = value;
  }
  public resetDownload() {
    this._download = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadInput() {
    return this._download;
  }

  // oplog_inc - computed: false, optional: true, required: false
  private _oplogInc?: number; 
  public get oplogInc() {
    return this.getNumberAttribute('oplog_inc');
  }
  public set oplogInc(value: number) {
    this._oplogInc = value;
  }
  public resetOplogInc() {
    this._oplogInc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oplogIncInput() {
    return this._oplogInc;
  }

  // oplog_ts - computed: false, optional: true, required: false
  private _oplogTs?: number; 
  public get oplogTs() {
    return this.getNumberAttribute('oplog_ts');
  }
  public set oplogTs(value: number) {
    this._oplogTs = value;
  }
  public resetOplogTs() {
    this._oplogTs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oplogTsInput() {
    return this._oplogTs;
  }

  // point_in_time - computed: false, optional: true, required: false
  private _pointInTime?: boolean | cdktf.IResolvable; 
  public get pointInTime() {
    return this.getBooleanAttribute('point_in_time');
  }
  public set pointInTime(value: boolean | cdktf.IResolvable) {
    this._pointInTime = value;
  }
  public resetPointInTime() {
    this._pointInTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pointInTimeInput() {
    return this._pointInTime;
  }

  // point_in_time_utc_seconds - computed: false, optional: true, required: false
  private _pointInTimeUtcSeconds?: number; 
  public get pointInTimeUtcSeconds() {
    return this.getNumberAttribute('point_in_time_utc_seconds');
  }
  public set pointInTimeUtcSeconds(value: number) {
    this._pointInTimeUtcSeconds = value;
  }
  public resetPointInTimeUtcSeconds() {
    this._pointInTimeUtcSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pointInTimeUtcSecondsInput() {
    return this._pointInTimeUtcSeconds;
  }

  // target_cluster_name - computed: false, optional: true, required: false
  private _targetClusterName?: string; 
  public get targetClusterName() {
    return this.getStringAttribute('target_cluster_name');
  }
  public set targetClusterName(value: string) {
    this._targetClusterName = value;
  }
  public resetTargetClusterName() {
    this._targetClusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetClusterNameInput() {
    return this._targetClusterName;
  }

  // target_project_id - computed: false, optional: true, required: false
  private _targetProjectId?: string; 
  public get targetProjectId() {
    return this.getStringAttribute('target_project_id');
  }
  public set targetProjectId(value: string) {
    this._targetProjectId = value;
  }
  public resetTargetProjectId() {
    this._targetProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetProjectIdInput() {
    return this._targetProjectId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.2/docs/resources/cloud_backup_snapshot_restore_job mongodbatlas_cloud_backup_snapshot_restore_job}
*/
export class CloudBackupSnapshotRestoreJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_cloud_backup_snapshot_restore_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudBackupSnapshotRestoreJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudBackupSnapshotRestoreJob to import
  * @param importFromId The id of the existing CloudBackupSnapshotRestoreJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.2/docs/resources/cloud_backup_snapshot_restore_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudBackupSnapshotRestoreJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_cloud_backup_snapshot_restore_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.2/docs/resources/cloud_backup_snapshot_restore_job mongodbatlas_cloud_backup_snapshot_restore_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudBackupSnapshotRestoreJobConfig
  */
  public constructor(scope: Construct, id: string, config: CloudBackupSnapshotRestoreJobConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_cloud_backup_snapshot_restore_job',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.12.2',
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
    this._projectId = config.projectId;
    this._snapshotId = config.snapshotId;
    this._deliveryTypeConfig.internalValue = config.deliveryTypeConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cancelled - computed: true, optional: false, required: false
  public get cancelled() {
    return this.getBooleanAttribute('cancelled');
  }

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

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // delivery_url - computed: true, optional: false, required: false
  public get deliveryUrl() {
    return this.getListAttribute('delivery_url');
  }

  // expired - computed: true, optional: false, required: false
  public get expired() {
    return this.getBooleanAttribute('expired');
  }

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }

  // finished_at - computed: true, optional: false, required: false
  public get finishedAt() {
    return this.getStringAttribute('finished_at');
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

  // snapshot_id - computed: false, optional: false, required: true
  private _snapshotId?: string; 
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string) {
    this._snapshotId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
  }

  // snapshot_restore_job_id - computed: true, optional: false, required: false
  public get snapshotRestoreJobId() {
    return this.getStringAttribute('snapshot_restore_job_id');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // delivery_type_config - computed: false, optional: true, required: false
  private _deliveryTypeConfig = new CloudBackupSnapshotRestoreJobDeliveryTypeConfigOutputReference(this, "delivery_type_config");
  public get deliveryTypeConfig() {
    return this._deliveryTypeConfig;
  }
  public putDeliveryTypeConfig(value: CloudBackupSnapshotRestoreJobDeliveryTypeConfig) {
    this._deliveryTypeConfig.internalValue = value;
  }
  public resetDeliveryTypeConfig() {
    this._deliveryTypeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryTypeConfigInput() {
    return this._deliveryTypeConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      snapshot_id: cdktf.stringToTerraform(this._snapshotId),
      delivery_type_config: cloudBackupSnapshotRestoreJobDeliveryTypeConfigToTerraform(this._deliveryTypeConfig.internalValue),
    };
  }
}
