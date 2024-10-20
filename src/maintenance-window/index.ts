// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.1/docs/resources/maintenance_window
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MaintenanceWindowConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.1/docs/resources/maintenance_window#auto_defer MaintenanceWindow#auto_defer}
  */
  readonly autoDefer?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.1/docs/resources/maintenance_window#auto_defer_once_enabled MaintenanceWindow#auto_defer_once_enabled}
  */
  readonly autoDeferOnceEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.1/docs/resources/maintenance_window#day_of_week MaintenanceWindow#day_of_week}
  */
  readonly dayOfWeek: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.1/docs/resources/maintenance_window#defer MaintenanceWindow#defer}
  */
  readonly defer?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.1/docs/resources/maintenance_window#hour_of_day MaintenanceWindow#hour_of_day}
  */
  readonly hourOfDay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.1/docs/resources/maintenance_window#id MaintenanceWindow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.1/docs/resources/maintenance_window#project_id MaintenanceWindow#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.1/docs/resources/maintenance_window#start_asap MaintenanceWindow#start_asap}
  */
  readonly startAsap?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.1/docs/resources/maintenance_window mongodbatlas_maintenance_window}
*/
export class MaintenanceWindow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_maintenance_window";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MaintenanceWindow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MaintenanceWindow to import
  * @param importFromId The id of the existing MaintenanceWindow that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.1/docs/resources/maintenance_window#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MaintenanceWindow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_maintenance_window", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.1/docs/resources/maintenance_window mongodbatlas_maintenance_window} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MaintenanceWindowConfig
  */
  public constructor(scope: Construct, id: string, config: MaintenanceWindowConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_maintenance_window',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.21.1',
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
    this._autoDefer = config.autoDefer;
    this._autoDeferOnceEnabled = config.autoDeferOnceEnabled;
    this._dayOfWeek = config.dayOfWeek;
    this._defer = config.defer;
    this._hourOfDay = config.hourOfDay;
    this._id = config.id;
    this._projectId = config.projectId;
    this._startAsap = config.startAsap;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_defer - computed: true, optional: true, required: false
  private _autoDefer?: boolean | cdktf.IResolvable; 
  public get autoDefer() {
    return this.getBooleanAttribute('auto_defer');
  }
  public set autoDefer(value: boolean | cdktf.IResolvable) {
    this._autoDefer = value;
  }
  public resetAutoDefer() {
    this._autoDefer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeferInput() {
    return this._autoDefer;
  }

  // auto_defer_once_enabled - computed: true, optional: true, required: false
  private _autoDeferOnceEnabled?: boolean | cdktf.IResolvable; 
  public get autoDeferOnceEnabled() {
    return this.getBooleanAttribute('auto_defer_once_enabled');
  }
  public set autoDeferOnceEnabled(value: boolean | cdktf.IResolvable) {
    this._autoDeferOnceEnabled = value;
  }
  public resetAutoDeferOnceEnabled() {
    this._autoDeferOnceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeferOnceEnabledInput() {
    return this._autoDeferOnceEnabled;
  }

  // day_of_week - computed: false, optional: false, required: true
  private _dayOfWeek?: number; 
  public get dayOfWeek() {
    return this.getNumberAttribute('day_of_week');
  }
  public set dayOfWeek(value: number) {
    this._dayOfWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // defer - computed: true, optional: true, required: false
  private _defer?: boolean | cdktf.IResolvable; 
  public get defer() {
    return this.getBooleanAttribute('defer');
  }
  public set defer(value: boolean | cdktf.IResolvable) {
    this._defer = value;
  }
  public resetDefer() {
    this._defer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deferInput() {
    return this._defer;
  }

  // hour_of_day - computed: true, optional: true, required: false
  private _hourOfDay?: number; 
  public get hourOfDay() {
    return this.getNumberAttribute('hour_of_day');
  }
  public set hourOfDay(value: number) {
    this._hourOfDay = value;
  }
  public resetHourOfDay() {
    this._hourOfDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourOfDayInput() {
    return this._hourOfDay;
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

  // start_asap - computed: true, optional: true, required: false
  private _startAsap?: boolean | cdktf.IResolvable; 
  public get startAsap() {
    return this.getBooleanAttribute('start_asap');
  }
  public set startAsap(value: boolean | cdktf.IResolvable) {
    this._startAsap = value;
  }
  public resetStartAsap() {
    this._startAsap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startAsapInput() {
    return this._startAsap;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_defer: cdktf.booleanToTerraform(this._autoDefer),
      auto_defer_once_enabled: cdktf.booleanToTerraform(this._autoDeferOnceEnabled),
      day_of_week: cdktf.numberToTerraform(this._dayOfWeek),
      defer: cdktf.booleanToTerraform(this._defer),
      hour_of_day: cdktf.numberToTerraform(this._hourOfDay),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      start_asap: cdktf.booleanToTerraform(this._startAsap),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_defer: {
        value: cdktf.booleanToHclTerraform(this._autoDefer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_defer_once_enabled: {
        value: cdktf.booleanToHclTerraform(this._autoDeferOnceEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      day_of_week: {
        value: cdktf.numberToHclTerraform(this._dayOfWeek),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      defer: {
        value: cdktf.booleanToHclTerraform(this._defer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hour_of_day: {
        value: cdktf.numberToHclTerraform(this._hourOfDay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      start_asap: {
        value: cdktf.booleanToHclTerraform(this._startAsap),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
