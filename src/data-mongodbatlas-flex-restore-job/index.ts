/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/data-sources/flex_restore_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMongodbatlasFlexRestoreJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Human-readable label that identifies the flex cluster whose snapshot you want to restore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/data-sources/flex_restore_job#name DataMongodbatlasFlexRestoreJob#name}
  */
  readonly name: string;
  /**
  * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.
  * 
  * **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/data-sources/flex_restore_job#project_id DataMongodbatlasFlexRestoreJob#project_id}
  */
  readonly projectId: string;
  /**
  * Unique 24-hexadecimal digit string that identifies the restore job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/data-sources/flex_restore_job#restore_job_id DataMongodbatlasFlexRestoreJob#restore_job_id}
  */
  readonly restoreJobId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/data-sources/flex_restore_job mongodbatlas_flex_restore_job}
*/
export class DataMongodbatlasFlexRestoreJob extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_flex_restore_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMongodbatlasFlexRestoreJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMongodbatlasFlexRestoreJob to import
  * @param importFromId The id of the existing DataMongodbatlasFlexRestoreJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/data-sources/flex_restore_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMongodbatlasFlexRestoreJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_flex_restore_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.37.0/docs/data-sources/flex_restore_job mongodbatlas_flex_restore_job} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMongodbatlasFlexRestoreJobConfig
  */
  public constructor(scope: Construct, id: string, config: DataMongodbatlasFlexRestoreJobConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_flex_restore_job',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.37.0',
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
    this._restoreJobId = config.restoreJobId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delivery_type - computed: true, optional: false, required: false
  public get deliveryType() {
    return this.getStringAttribute('delivery_type');
  }

  // expiration_date - computed: true, optional: false, required: false
  public get expirationDate() {
    return this.getStringAttribute('expiration_date');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // restore_job_id - computed: false, optional: false, required: true
  private _restoreJobId?: string; 
  public get restoreJobId() {
    return this.getStringAttribute('restore_job_id');
  }
  public set restoreJobId(value: string) {
    this._restoreJobId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreJobIdInput() {
    return this._restoreJobId;
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
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      restore_job_id: cdktf.stringToTerraform(this._restoreJobId),
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
      restore_job_id: {
        value: cdktf.stringToHclTerraform(this._restoreJobId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
