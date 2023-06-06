/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/data-sources/backup_compliance_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMongodbatlasBackupCompliancePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/data-sources/backup_compliance_policy#id DataMongodbatlasBackupCompliancePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/data-sources/backup_compliance_policy#project_id DataMongodbatlasBackupCompliancePolicy#project_id}
  */
  readonly projectId: string;
  /**
  * on_demand_policy_item block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/data-sources/backup_compliance_policy#on_demand_policy_item DataMongodbatlasBackupCompliancePolicy#on_demand_policy_item}
  */
  readonly onDemandPolicyItem?: DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItem;
  /**
  * policy_item_daily block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/data-sources/backup_compliance_policy#policy_item_daily DataMongodbatlasBackupCompliancePolicy#policy_item_daily}
  */
  readonly policyItemDaily?: DataMongodbatlasBackupCompliancePolicyPolicyItemDaily;
  /**
  * policy_item_hourly block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/data-sources/backup_compliance_policy#policy_item_hourly DataMongodbatlasBackupCompliancePolicy#policy_item_hourly}
  */
  readonly policyItemHourly?: DataMongodbatlasBackupCompliancePolicyPolicyItemHourly;
  /**
  * policy_item_monthly block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/data-sources/backup_compliance_policy#policy_item_monthly DataMongodbatlasBackupCompliancePolicy#policy_item_monthly}
  */
  readonly policyItemMonthly?: DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly[] | cdktf.IResolvable;
  /**
  * policy_item_weekly block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/data-sources/backup_compliance_policy#policy_item_weekly DataMongodbatlasBackupCompliancePolicy#policy_item_weekly}
  */
  readonly policyItemWeekly?: DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly[] | cdktf.IResolvable;
}
export interface DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItem {
}

export function dataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemToTerraform(struct?: DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference | DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // frequency_interval - computed: true, optional: false, required: false
  public get frequencyInterval() {
    return this.getNumberAttribute('frequency_interval');
  }

  // frequency_type - computed: true, optional: false, required: false
  public get frequencyType() {
    return this.getStringAttribute('frequency_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // retention_unit - computed: true, optional: false, required: false
  public get retentionUnit() {
    return this.getStringAttribute('retention_unit');
  }

  // retention_value - computed: true, optional: false, required: false
  public get retentionValue() {
    return this.getNumberAttribute('retention_value');
  }
}
export interface DataMongodbatlasBackupCompliancePolicyPolicyItemDaily {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/data-sources/backup_compliance_policy#frequency_interval DataMongodbatlasBackupCompliancePolicy#frequency_interval}
  */
  readonly frequencyInterval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/data-sources/backup_compliance_policy#retention_unit DataMongodbatlasBackupCompliancePolicy#retention_unit}
  */
  readonly retentionUnit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/data-sources/backup_compliance_policy#retention_value DataMongodbatlasBackupCompliancePolicy#retention_value}
  */
  readonly retentionValue: number;
}

export function dataMongodbatlasBackupCompliancePolicyPolicyItemDailyToTerraform(struct?: DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference | DataMongodbatlasBackupCompliancePolicyPolicyItemDaily): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frequency_interval: cdktf.numberToTerraform(struct!.frequencyInterval),
    retention_unit: cdktf.stringToTerraform(struct!.retentionUnit),
    retention_value: cdktf.numberToTerraform(struct!.retentionValue),
  }
}

export class DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataMongodbatlasBackupCompliancePolicyPolicyItemDaily | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequencyInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequencyInterval = this._frequencyInterval;
    }
    if (this._retentionUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionUnit = this._retentionUnit;
    }
    if (this._retentionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionValue = this._retentionValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasBackupCompliancePolicyPolicyItemDaily | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._frequencyInterval = undefined;
      this._retentionUnit = undefined;
      this._retentionValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._frequencyInterval = value.frequencyInterval;
      this._retentionUnit = value.retentionUnit;
      this._retentionValue = value.retentionValue;
    }
  }

  // frequency_interval - computed: false, optional: false, required: true
  private _frequencyInterval?: number; 
  public get frequencyInterval() {
    return this.getNumberAttribute('frequency_interval');
  }
  public set frequencyInterval(value: number) {
    this._frequencyInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyIntervalInput() {
    return this._frequencyInterval;
  }

  // frequency_type - computed: true, optional: false, required: false
  public get frequencyType() {
    return this.getStringAttribute('frequency_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // retention_unit - computed: false, optional: false, required: true
  private _retentionUnit?: string; 
  public get retentionUnit() {
    return this.getStringAttribute('retention_unit');
  }
  public set retentionUnit(value: string) {
    this._retentionUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionUnitInput() {
    return this._retentionUnit;
  }

  // retention_value - computed: false, optional: false, required: true
  private _retentionValue?: number; 
  public get retentionValue() {
    return this.getNumberAttribute('retention_value');
  }
  public set retentionValue(value: number) {
    this._retentionValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionValueInput() {
    return this._retentionValue;
  }
}
export interface DataMongodbatlasBackupCompliancePolicyPolicyItemHourly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/data-sources/backup_compliance_policy#frequency_interval DataMongodbatlasBackupCompliancePolicy#frequency_interval}
  */
  readonly frequencyInterval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/data-sources/backup_compliance_policy#retention_unit DataMongodbatlasBackupCompliancePolicy#retention_unit}
  */
  readonly retentionUnit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/data-sources/backup_compliance_policy#retention_value DataMongodbatlasBackupCompliancePolicy#retention_value}
  */
  readonly retentionValue: number;
}

export function dataMongodbatlasBackupCompliancePolicyPolicyItemHourlyToTerraform(struct?: DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference | DataMongodbatlasBackupCompliancePolicyPolicyItemHourly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frequency_interval: cdktf.numberToTerraform(struct!.frequencyInterval),
    retention_unit: cdktf.stringToTerraform(struct!.retentionUnit),
    retention_value: cdktf.numberToTerraform(struct!.retentionValue),
  }
}

export class DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataMongodbatlasBackupCompliancePolicyPolicyItemHourly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequencyInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequencyInterval = this._frequencyInterval;
    }
    if (this._retentionUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionUnit = this._retentionUnit;
    }
    if (this._retentionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionValue = this._retentionValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasBackupCompliancePolicyPolicyItemHourly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._frequencyInterval = undefined;
      this._retentionUnit = undefined;
      this._retentionValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._frequencyInterval = value.frequencyInterval;
      this._retentionUnit = value.retentionUnit;
      this._retentionValue = value.retentionValue;
    }
  }

  // frequency_interval - computed: false, optional: false, required: true
  private _frequencyInterval?: number; 
  public get frequencyInterval() {
    return this.getNumberAttribute('frequency_interval');
  }
  public set frequencyInterval(value: number) {
    this._frequencyInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyIntervalInput() {
    return this._frequencyInterval;
  }

  // frequency_type - computed: true, optional: false, required: false
  public get frequencyType() {
    return this.getStringAttribute('frequency_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // retention_unit - computed: false, optional: false, required: true
  private _retentionUnit?: string; 
  public get retentionUnit() {
    return this.getStringAttribute('retention_unit');
  }
  public set retentionUnit(value: string) {
    this._retentionUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionUnitInput() {
    return this._retentionUnit;
  }

  // retention_value - computed: false, optional: false, required: true
  private _retentionValue?: number; 
  public get retentionValue() {
    return this.getNumberAttribute('retention_value');
  }
  public set retentionValue(value: number) {
    this._retentionValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionValueInput() {
    return this._retentionValue;
  }
}
export interface DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/data-sources/backup_compliance_policy#frequency_interval DataMongodbatlasBackupCompliancePolicy#frequency_interval}
  */
  readonly frequencyInterval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/data-sources/backup_compliance_policy#retention_unit DataMongodbatlasBackupCompliancePolicy#retention_unit}
  */
  readonly retentionUnit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/data-sources/backup_compliance_policy#retention_value DataMongodbatlasBackupCompliancePolicy#retention_value}
  */
  readonly retentionValue: number;
}

export function dataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyToTerraform(struct?: DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frequency_interval: cdktf.numberToTerraform(struct!.frequencyInterval),
    retention_unit: cdktf.stringToTerraform(struct!.retentionUnit),
    retention_value: cdktf.numberToTerraform(struct!.retentionValue),
  }
}

export class DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequencyInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequencyInterval = this._frequencyInterval;
    }
    if (this._retentionUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionUnit = this._retentionUnit;
    }
    if (this._retentionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionValue = this._retentionValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._frequencyInterval = undefined;
      this._retentionUnit = undefined;
      this._retentionValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._frequencyInterval = value.frequencyInterval;
      this._retentionUnit = value.retentionUnit;
      this._retentionValue = value.retentionValue;
    }
  }

  // frequency_interval - computed: false, optional: false, required: true
  private _frequencyInterval?: number; 
  public get frequencyInterval() {
    return this.getNumberAttribute('frequency_interval');
  }
  public set frequencyInterval(value: number) {
    this._frequencyInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyIntervalInput() {
    return this._frequencyInterval;
  }

  // frequency_type - computed: true, optional: false, required: false
  public get frequencyType() {
    return this.getStringAttribute('frequency_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // retention_unit - computed: false, optional: false, required: true
  private _retentionUnit?: string; 
  public get retentionUnit() {
    return this.getStringAttribute('retention_unit');
  }
  public set retentionUnit(value: string) {
    this._retentionUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionUnitInput() {
    return this._retentionUnit;
  }

  // retention_value - computed: false, optional: false, required: true
  private _retentionValue?: number; 
  public get retentionValue() {
    return this.getNumberAttribute('retention_value');
  }
  public set retentionValue(value: number) {
    this._retentionValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionValueInput() {
    return this._retentionValue;
  }
}

export class DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList extends cdktf.ComplexList {
  public internalValue? : DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference {
    return new DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/data-sources/backup_compliance_policy#frequency_interval DataMongodbatlasBackupCompliancePolicy#frequency_interval}
  */
  readonly frequencyInterval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/data-sources/backup_compliance_policy#retention_unit DataMongodbatlasBackupCompliancePolicy#retention_unit}
  */
  readonly retentionUnit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/data-sources/backup_compliance_policy#retention_value DataMongodbatlasBackupCompliancePolicy#retention_value}
  */
  readonly retentionValue: number;
}

export function dataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyToTerraform(struct?: DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frequency_interval: cdktf.numberToTerraform(struct!.frequencyInterval),
    retention_unit: cdktf.stringToTerraform(struct!.retentionUnit),
    retention_value: cdktf.numberToTerraform(struct!.retentionValue),
  }
}

export class DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequencyInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequencyInterval = this._frequencyInterval;
    }
    if (this._retentionUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionUnit = this._retentionUnit;
    }
    if (this._retentionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionValue = this._retentionValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._frequencyInterval = undefined;
      this._retentionUnit = undefined;
      this._retentionValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._frequencyInterval = value.frequencyInterval;
      this._retentionUnit = value.retentionUnit;
      this._retentionValue = value.retentionValue;
    }
  }

  // frequency_interval - computed: false, optional: false, required: true
  private _frequencyInterval?: number; 
  public get frequencyInterval() {
    return this.getNumberAttribute('frequency_interval');
  }
  public set frequencyInterval(value: number) {
    this._frequencyInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyIntervalInput() {
    return this._frequencyInterval;
  }

  // frequency_type - computed: true, optional: false, required: false
  public get frequencyType() {
    return this.getStringAttribute('frequency_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // retention_unit - computed: false, optional: false, required: true
  private _retentionUnit?: string; 
  public get retentionUnit() {
    return this.getStringAttribute('retention_unit');
  }
  public set retentionUnit(value: string) {
    this._retentionUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionUnitInput() {
    return this._retentionUnit;
  }

  // retention_value - computed: false, optional: false, required: true
  private _retentionValue?: number; 
  public get retentionValue() {
    return this.getNumberAttribute('retention_value');
  }
  public set retentionValue(value: number) {
    this._retentionValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionValueInput() {
    return this._retentionValue;
  }
}

export class DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList extends cdktf.ComplexList {
  public internalValue? : DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference {
    return new DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/data-sources/backup_compliance_policy mongodbatlas_backup_compliance_policy}
*/
export class DataMongodbatlasBackupCompliancePolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_backup_compliance_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.9.0/docs/data-sources/backup_compliance_policy mongodbatlas_backup_compliance_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMongodbatlasBackupCompliancePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataMongodbatlasBackupCompliancePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_backup_compliance_policy',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.9.0',
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
    this._onDemandPolicyItem.internalValue = config.onDemandPolicyItem;
    this._policyItemDaily.internalValue = config.policyItemDaily;
    this._policyItemHourly.internalValue = config.policyItemHourly;
    this._policyItemMonthly.internalValue = config.policyItemMonthly;
    this._policyItemWeekly.internalValue = config.policyItemWeekly;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorized_email - computed: true, optional: false, required: false
  public get authorizedEmail() {
    return this.getStringAttribute('authorized_email');
  }

  // copy_protection_enabled - computed: true, optional: false, required: false
  public get copyProtectionEnabled() {
    return this.getBooleanAttribute('copy_protection_enabled');
  }

  // encryption_at_rest_enabled - computed: true, optional: false, required: false
  public get encryptionAtRestEnabled() {
    return this.getBooleanAttribute('encryption_at_rest_enabled');
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

  // pit_enabled - computed: true, optional: false, required: false
  public get pitEnabled() {
    return this.getBooleanAttribute('pit_enabled');
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

  // restore_window_days - computed: true, optional: false, required: false
  public get restoreWindowDays() {
    return this.getNumberAttribute('restore_window_days');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // updated_date - computed: true, optional: false, required: false
  public get updatedDate() {
    return this.getStringAttribute('updated_date');
  }

  // updated_user - computed: true, optional: false, required: false
  public get updatedUser() {
    return this.getStringAttribute('updated_user');
  }

  // on_demand_policy_item - computed: false, optional: true, required: false
  private _onDemandPolicyItem = new DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference(this, "on_demand_policy_item");
  public get onDemandPolicyItem() {
    return this._onDemandPolicyItem;
  }
  public putOnDemandPolicyItem(value: DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItem) {
    this._onDemandPolicyItem.internalValue = value;
  }
  public resetOnDemandPolicyItem() {
    this._onDemandPolicyItem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandPolicyItemInput() {
    return this._onDemandPolicyItem.internalValue;
  }

  // policy_item_daily - computed: false, optional: true, required: false
  private _policyItemDaily = new DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference(this, "policy_item_daily");
  public get policyItemDaily() {
    return this._policyItemDaily;
  }
  public putPolicyItemDaily(value: DataMongodbatlasBackupCompliancePolicyPolicyItemDaily) {
    this._policyItemDaily.internalValue = value;
  }
  public resetPolicyItemDaily() {
    this._policyItemDaily.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyItemDailyInput() {
    return this._policyItemDaily.internalValue;
  }

  // policy_item_hourly - computed: false, optional: true, required: false
  private _policyItemHourly = new DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference(this, "policy_item_hourly");
  public get policyItemHourly() {
    return this._policyItemHourly;
  }
  public putPolicyItemHourly(value: DataMongodbatlasBackupCompliancePolicyPolicyItemHourly) {
    this._policyItemHourly.internalValue = value;
  }
  public resetPolicyItemHourly() {
    this._policyItemHourly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyItemHourlyInput() {
    return this._policyItemHourly.internalValue;
  }

  // policy_item_monthly - computed: false, optional: true, required: false
  private _policyItemMonthly = new DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList(this, "policy_item_monthly", false);
  public get policyItemMonthly() {
    return this._policyItemMonthly;
  }
  public putPolicyItemMonthly(value: DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly[] | cdktf.IResolvable) {
    this._policyItemMonthly.internalValue = value;
  }
  public resetPolicyItemMonthly() {
    this._policyItemMonthly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyItemMonthlyInput() {
    return this._policyItemMonthly.internalValue;
  }

  // policy_item_weekly - computed: false, optional: true, required: false
  private _policyItemWeekly = new DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList(this, "policy_item_weekly", false);
  public get policyItemWeekly() {
    return this._policyItemWeekly;
  }
  public putPolicyItemWeekly(value: DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly[] | cdktf.IResolvable) {
    this._policyItemWeekly.internalValue = value;
  }
  public resetPolicyItemWeekly() {
    this._policyItemWeekly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyItemWeeklyInput() {
    return this._policyItemWeekly.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      on_demand_policy_item: dataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemToTerraform(this._onDemandPolicyItem.internalValue),
      policy_item_daily: dataMongodbatlasBackupCompliancePolicyPolicyItemDailyToTerraform(this._policyItemDaily.internalValue),
      policy_item_hourly: dataMongodbatlasBackupCompliancePolicyPolicyItemHourlyToTerraform(this._policyItemHourly.internalValue),
      policy_item_monthly: cdktf.listMapper(dataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyToTerraform, true)(this._policyItemMonthly.internalValue),
      policy_item_weekly: cdktf.listMapper(dataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyToTerraform, true)(this._policyItemWeekly.internalValue),
    };
  }
}
