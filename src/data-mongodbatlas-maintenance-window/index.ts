// https://www.terraform.io/docs/providers/mongodbatlas/d/maintenance_window
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMongodbatlasMaintenanceWindowConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/maintenance_window#id DataMongodbatlasMaintenanceWindow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/maintenance_window#project_id DataMongodbatlasMaintenanceWindow#project_id}
  */
  readonly projectId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/mongodbatlas/d/maintenance_window mongodbatlas_maintenance_window}
*/
export class DataMongodbatlasMaintenanceWindow extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_maintenance_window";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/mongodbatlas/d/maintenance_window mongodbatlas_maintenance_window} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMongodbatlasMaintenanceWindowConfig
  */
  public constructor(scope: Construct, id: string, config: DataMongodbatlasMaintenanceWindowConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_maintenance_window',
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
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_defer_once_enabled - computed: true, optional: false, required: false
  public get autoDeferOnceEnabled() {
    return this.getBooleanAttribute('auto_defer_once_enabled');
  }

  // day_of_week - computed: true, optional: false, required: false
  public get dayOfWeek() {
    return this.getNumberAttribute('day_of_week');
  }

  // hour_of_day - computed: true, optional: false, required: false
  public get hourOfDay() {
    return this.getNumberAttribute('hour_of_day');
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

  // number_of_deferrals - computed: true, optional: false, required: false
  public get numberOfDeferrals() {
    return this.getNumberAttribute('number_of_deferrals');
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

  // start_asap - computed: true, optional: false, required: false
  public get startAsap() {
    return this.getBooleanAttribute('start_asap');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }
}
