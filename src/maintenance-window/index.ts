/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/maintenance_window
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MaintenanceWindowConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/maintenance_window#auto_defer MaintenanceWindow#auto_defer}
  */
  readonly autoDefer?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/maintenance_window#auto_defer_once_enabled MaintenanceWindow#auto_defer_once_enabled}
  */
  readonly autoDeferOnceEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/maintenance_window#day_of_week MaintenanceWindow#day_of_week}
  */
  readonly dayOfWeek: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/maintenance_window#defer MaintenanceWindow#defer}
  */
  readonly defer?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/maintenance_window#hour_of_day MaintenanceWindow#hour_of_day}
  */
  readonly hourOfDay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/maintenance_window#id MaintenanceWindow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/maintenance_window#project_id MaintenanceWindow#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/maintenance_window#start_asap MaintenanceWindow#start_asap}
  */
  readonly startAsap?: boolean | cdktf.IResolvable;
  /**
  * protected_hours block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/maintenance_window#protected_hours MaintenanceWindow#protected_hours}
  */
  readonly protectedHours?: MaintenanceWindowProtectedHours;
}
export interface MaintenanceWindowProtectedHours {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/maintenance_window#end_hour_of_day MaintenanceWindow#end_hour_of_day}
  */
  readonly endHourOfDay: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/maintenance_window#start_hour_of_day MaintenanceWindow#start_hour_of_day}
  */
  readonly startHourOfDay: number;
}

export function maintenanceWindowProtectedHoursToTerraform(struct?: MaintenanceWindowProtectedHoursOutputReference | MaintenanceWindowProtectedHours): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_hour_of_day: cdktf.numberToTerraform(struct!.endHourOfDay),
    start_hour_of_day: cdktf.numberToTerraform(struct!.startHourOfDay),
  }
}


export function maintenanceWindowProtectedHoursToHclTerraform(struct?: MaintenanceWindowProtectedHoursOutputReference | MaintenanceWindowProtectedHours): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_hour_of_day: {
      value: cdktf.numberToHclTerraform(struct!.endHourOfDay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_hour_of_day: {
      value: cdktf.numberToHclTerraform(struct!.startHourOfDay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MaintenanceWindowProtectedHoursOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MaintenanceWindowProtectedHours | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endHourOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.endHourOfDay = this._endHourOfDay;
    }
    if (this._startHourOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.startHourOfDay = this._startHourOfDay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MaintenanceWindowProtectedHours | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endHourOfDay = undefined;
      this._startHourOfDay = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endHourOfDay = value.endHourOfDay;
      this._startHourOfDay = value.startHourOfDay;
    }
  }

  // end_hour_of_day - computed: false, optional: false, required: true
  private _endHourOfDay?: number; 
  public get endHourOfDay() {
    return this.getNumberAttribute('end_hour_of_day');
  }
  public set endHourOfDay(value: number) {
    this._endHourOfDay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endHourOfDayInput() {
    return this._endHourOfDay;
  }

  // start_hour_of_day - computed: false, optional: false, required: true
  private _startHourOfDay?: number; 
  public get startHourOfDay() {
    return this.getNumberAttribute('start_hour_of_day');
  }
  public set startHourOfDay(value: number) {
    this._startHourOfDay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startHourOfDayInput() {
    return this._startHourOfDay;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/maintenance_window mongodbatlas_maintenance_window}
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
  * @param importFromId The id of the existing MaintenanceWindow that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/maintenance_window#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MaintenanceWindow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_maintenance_window", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/resources/maintenance_window mongodbatlas_maintenance_window} Resource
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
    this._autoDefer = config.autoDefer;
    this._autoDeferOnceEnabled = config.autoDeferOnceEnabled;
    this._dayOfWeek = config.dayOfWeek;
    this._defer = config.defer;
    this._hourOfDay = config.hourOfDay;
    this._id = config.id;
    this._projectId = config.projectId;
    this._startAsap = config.startAsap;
    this._protectedHours.internalValue = config.protectedHours;
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

  // time_zone_id - computed: true, optional: false, required: false
  public get timeZoneId() {
    return this.getStringAttribute('time_zone_id');
  }

  // protected_hours - computed: false, optional: true, required: false
  private _protectedHours = new MaintenanceWindowProtectedHoursOutputReference(this, "protected_hours");
  public get protectedHours() {
    return this._protectedHours;
  }
  public putProtectedHours(value: MaintenanceWindowProtectedHours) {
    this._protectedHours.internalValue = value;
  }
  public resetProtectedHours() {
    this._protectedHours.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedHoursInput() {
    return this._protectedHours.internalValue;
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
      protected_hours: maintenanceWindowProtectedHoursToTerraform(this._protectedHours.internalValue),
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
      protected_hours: {
        value: maintenanceWindowProtectedHoursToHclTerraform(this._protectedHours.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MaintenanceWindowProtectedHoursList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
