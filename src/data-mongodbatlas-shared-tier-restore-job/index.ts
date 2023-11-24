/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/shared_tier_restore_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMongodbatlasSharedTierRestoreJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/shared_tier_restore_job#cluster_name DataMongodbatlasSharedTierRestoreJob#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/shared_tier_restore_job#id DataMongodbatlasSharedTierRestoreJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/shared_tier_restore_job#job_id DataMongodbatlasSharedTierRestoreJob#job_id}
  */
  readonly jobId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/shared_tier_restore_job#project_id DataMongodbatlasSharedTierRestoreJob#project_id}
  */
  readonly projectId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/shared_tier_restore_job mongodbatlas_shared_tier_restore_job}
*/
export class DataMongodbatlasSharedTierRestoreJob extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_shared_tier_restore_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMongodbatlasSharedTierRestoreJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMongodbatlasSharedTierRestoreJob to import
  * @param importFromId The id of the existing DataMongodbatlasSharedTierRestoreJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/shared_tier_restore_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMongodbatlasSharedTierRestoreJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_shared_tier_restore_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/shared_tier_restore_job mongodbatlas_shared_tier_restore_job} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMongodbatlasSharedTierRestoreJobConfig
  */
  public constructor(scope: Construct, id: string, config: DataMongodbatlasSharedTierRestoreJobConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_shared_tier_restore_job',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.13.1',
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
    this._jobId = config.jobId;
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

  // delivery_type - computed: true, optional: false, required: false
  public get deliveryType() {
    return this.getStringAttribute('delivery_type');
  }

  // expiration_date - computed: true, optional: false, required: false
  public get expirationDate() {
    return this.getStringAttribute('expiration_date');
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

  // job_id - computed: false, optional: false, required: true
  private _jobId?: string; 
  public get jobId() {
    return this.getStringAttribute('job_id');
  }
  public set jobId(value: string) {
    this._jobId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobIdInput() {
    return this._jobId;
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

  // restore_finished_date - computed: true, optional: false, required: false
  public get restoreFinishedDate() {
    return this.getStringAttribute('restore_finished_date');
  }

  // restore_scheduled_date - computed: true, optional: false, required: false
  public get restoreScheduledDate() {
    return this.getStringAttribute('restore_scheduled_date');
  }

  // snapshot_finished_date - computed: true, optional: false, required: false
  public get snapshotFinishedDate() {
    return this.getStringAttribute('snapshot_finished_date');
  }

  // snapshot_id - computed: true, optional: false, required: false
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }

  // snapshot_url - computed: true, optional: false, required: false
  public get snapshotUrl() {
    return this.getStringAttribute('snapshot_url');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // target_deployment_item_name - computed: true, optional: false, required: false
  public get targetDeploymentItemName() {
    return this.getStringAttribute('target_deployment_item_name');
  }

  // target_project_id - computed: true, optional: false, required: false
  public get targetProjectId() {
    return this.getStringAttribute('target_project_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      id: cdktf.stringToTerraform(this._id),
      job_id: cdktf.stringToTerraform(this._jobId),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }
}
