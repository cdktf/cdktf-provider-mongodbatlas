// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/backup_compliance_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BackupCompliancePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/backup_compliance_policy#authorized_email BackupCompliancePolicy#authorized_email}
  */
  readonly authorizedEmail: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/backup_compliance_policy#copy_protection_enabled BackupCompliancePolicy#copy_protection_enabled}
  */
  readonly copyProtectionEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/backup_compliance_policy#encryption_at_rest_enabled BackupCompliancePolicy#encryption_at_rest_enabled}
  */
  readonly encryptionAtRestEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/backup_compliance_policy#id BackupCompliancePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/backup_compliance_policy#pit_enabled BackupCompliancePolicy#pit_enabled}
  */
  readonly pitEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/backup_compliance_policy#project_id BackupCompliancePolicy#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/backup_compliance_policy#restore_window_days BackupCompliancePolicy#restore_window_days}
  */
  readonly restoreWindowDays?: number;
  /**
  * on_demand_policy_item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/backup_compliance_policy#on_demand_policy_item BackupCompliancePolicy#on_demand_policy_item}
  */
  readonly onDemandPolicyItem: BackupCompliancePolicyOnDemandPolicyItem;
  /**
  * policy_item_daily block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/backup_compliance_policy#policy_item_daily BackupCompliancePolicy#policy_item_daily}
  */
  readonly policyItemDaily?: BackupCompliancePolicyPolicyItemDaily;
  /**
  * policy_item_hourly block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/backup_compliance_policy#policy_item_hourly BackupCompliancePolicy#policy_item_hourly}
  */
  readonly policyItemHourly?: BackupCompliancePolicyPolicyItemHourly;
  /**
  * policy_item_monthly block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/backup_compliance_policy#policy_item_monthly BackupCompliancePolicy#policy_item_monthly}
  */
  readonly policyItemMonthly?: BackupCompliancePolicyPolicyItemMonthly[] | cdktf.IResolvable;
  /**
  * policy_item_weekly block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/backup_compliance_policy#policy_item_weekly BackupCompliancePolicy#policy_item_weekly}
  */
  readonly policyItemWeekly?: BackupCompliancePolicyPolicyItemWeekly[] | cdktf.IResolvable;
}
export interface BackupCompliancePolicyOnDemandPolicyItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/backup_compliance_policy#frequency_interval BackupCompliancePolicy#frequency_interval}
  */
  readonly frequencyInterval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/backup_compliance_policy#retention_unit BackupCompliancePolicy#retention_unit}
  */
  readonly retentionUnit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/backup_compliance_policy#retention_value BackupCompliancePolicy#retention_value}
  */
  readonly retentionValue: number;
}

export function backupCompliancePolicyOnDemandPolicyItemToTerraform(struct?: BackupCompliancePolicyOnDemandPolicyItemOutputReference | BackupCompliancePolicyOnDemandPolicyItem): any {
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

export class BackupCompliancePolicyOnDemandPolicyItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupCompliancePolicyOnDemandPolicyItem | undefined {
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

  public set internalValue(value: BackupCompliancePolicyOnDemandPolicyItem | undefined) {
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
export interface BackupCompliancePolicyPolicyItemDaily {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/backup_compliance_policy#frequency_interval BackupCompliancePolicy#frequency_interval}
  */
  readonly frequencyInterval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/backup_compliance_policy#retention_unit BackupCompliancePolicy#retention_unit}
  */
  readonly retentionUnit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/backup_compliance_policy#retention_value BackupCompliancePolicy#retention_value}
  */
  readonly retentionValue: number;
}

export function backupCompliancePolicyPolicyItemDailyToTerraform(struct?: BackupCompliancePolicyPolicyItemDailyOutputReference | BackupCompliancePolicyPolicyItemDaily): any {
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

export class BackupCompliancePolicyPolicyItemDailyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupCompliancePolicyPolicyItemDaily | undefined {
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

  public set internalValue(value: BackupCompliancePolicyPolicyItemDaily | undefined) {
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
export interface BackupCompliancePolicyPolicyItemHourly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/backup_compliance_policy#frequency_interval BackupCompliancePolicy#frequency_interval}
  */
  readonly frequencyInterval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/backup_compliance_policy#retention_unit BackupCompliancePolicy#retention_unit}
  */
  readonly retentionUnit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/backup_compliance_policy#retention_value BackupCompliancePolicy#retention_value}
  */
  readonly retentionValue: number;
}

export function backupCompliancePolicyPolicyItemHourlyToTerraform(struct?: BackupCompliancePolicyPolicyItemHourlyOutputReference | BackupCompliancePolicyPolicyItemHourly): any {
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

export class BackupCompliancePolicyPolicyItemHourlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupCompliancePolicyPolicyItemHourly | undefined {
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

  public set internalValue(value: BackupCompliancePolicyPolicyItemHourly | undefined) {
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
export interface BackupCompliancePolicyPolicyItemMonthly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/backup_compliance_policy#frequency_interval BackupCompliancePolicy#frequency_interval}
  */
  readonly frequencyInterval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/backup_compliance_policy#retention_unit BackupCompliancePolicy#retention_unit}
  */
  readonly retentionUnit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/backup_compliance_policy#retention_value BackupCompliancePolicy#retention_value}
  */
  readonly retentionValue: number;
}

export function backupCompliancePolicyPolicyItemMonthlyToTerraform(struct?: BackupCompliancePolicyPolicyItemMonthly | cdktf.IResolvable): any {
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

export class BackupCompliancePolicyPolicyItemMonthlyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BackupCompliancePolicyPolicyItemMonthly | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BackupCompliancePolicyPolicyItemMonthly | cdktf.IResolvable | undefined) {
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

export class BackupCompliancePolicyPolicyItemMonthlyList extends cdktf.ComplexList {
  public internalValue? : BackupCompliancePolicyPolicyItemMonthly[] | cdktf.IResolvable

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
  public get(index: number): BackupCompliancePolicyPolicyItemMonthlyOutputReference {
    return new BackupCompliancePolicyPolicyItemMonthlyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupCompliancePolicyPolicyItemWeekly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/backup_compliance_policy#frequency_interval BackupCompliancePolicy#frequency_interval}
  */
  readonly frequencyInterval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/backup_compliance_policy#retention_unit BackupCompliancePolicy#retention_unit}
  */
  readonly retentionUnit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/backup_compliance_policy#retention_value BackupCompliancePolicy#retention_value}
  */
  readonly retentionValue: number;
}

export function backupCompliancePolicyPolicyItemWeeklyToTerraform(struct?: BackupCompliancePolicyPolicyItemWeekly | cdktf.IResolvable): any {
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

export class BackupCompliancePolicyPolicyItemWeeklyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BackupCompliancePolicyPolicyItemWeekly | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BackupCompliancePolicyPolicyItemWeekly | cdktf.IResolvable | undefined) {
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

export class BackupCompliancePolicyPolicyItemWeeklyList extends cdktf.ComplexList {
  public internalValue? : BackupCompliancePolicyPolicyItemWeekly[] | cdktf.IResolvable

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
  public get(index: number): BackupCompliancePolicyPolicyItemWeeklyOutputReference {
    return new BackupCompliancePolicyPolicyItemWeeklyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/backup_compliance_policy mongodbatlas_backup_compliance_policy}
*/
export class BackupCompliancePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_backup_compliance_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BackupCompliancePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BackupCompliancePolicy to import
  * @param importFromId The id of the existing BackupCompliancePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/backup_compliance_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BackupCompliancePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_backup_compliance_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/backup_compliance_policy mongodbatlas_backup_compliance_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BackupCompliancePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: BackupCompliancePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_backup_compliance_policy',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.12.1',
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
    this._authorizedEmail = config.authorizedEmail;
    this._copyProtectionEnabled = config.copyProtectionEnabled;
    this._encryptionAtRestEnabled = config.encryptionAtRestEnabled;
    this._id = config.id;
    this._pitEnabled = config.pitEnabled;
    this._projectId = config.projectId;
    this._restoreWindowDays = config.restoreWindowDays;
    this._onDemandPolicyItem.internalValue = config.onDemandPolicyItem;
    this._policyItemDaily.internalValue = config.policyItemDaily;
    this._policyItemHourly.internalValue = config.policyItemHourly;
    this._policyItemMonthly.internalValue = config.policyItemMonthly;
    this._policyItemWeekly.internalValue = config.policyItemWeekly;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorized_email - computed: false, optional: false, required: true
  private _authorizedEmail?: string; 
  public get authorizedEmail() {
    return this.getStringAttribute('authorized_email');
  }
  public set authorizedEmail(value: string) {
    this._authorizedEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedEmailInput() {
    return this._authorizedEmail;
  }

  // copy_protection_enabled - computed: false, optional: false, required: true
  private _copyProtectionEnabled?: boolean | cdktf.IResolvable; 
  public get copyProtectionEnabled() {
    return this.getBooleanAttribute('copy_protection_enabled');
  }
  public set copyProtectionEnabled(value: boolean | cdktf.IResolvable) {
    this._copyProtectionEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get copyProtectionEnabledInput() {
    return this._copyProtectionEnabled;
  }

  // encryption_at_rest_enabled - computed: false, optional: false, required: true
  private _encryptionAtRestEnabled?: boolean | cdktf.IResolvable; 
  public get encryptionAtRestEnabled() {
    return this.getBooleanAttribute('encryption_at_rest_enabled');
  }
  public set encryptionAtRestEnabled(value: boolean | cdktf.IResolvable) {
    this._encryptionAtRestEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAtRestEnabledInput() {
    return this._encryptionAtRestEnabled;
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

  // pit_enabled - computed: false, optional: false, required: true
  private _pitEnabled?: boolean | cdktf.IResolvable; 
  public get pitEnabled() {
    return this.getBooleanAttribute('pit_enabled');
  }
  public set pitEnabled(value: boolean | cdktf.IResolvable) {
    this._pitEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pitEnabledInput() {
    return this._pitEnabled;
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

  // restore_window_days - computed: true, optional: true, required: false
  private _restoreWindowDays?: number; 
  public get restoreWindowDays() {
    return this.getNumberAttribute('restore_window_days');
  }
  public set restoreWindowDays(value: number) {
    this._restoreWindowDays = value;
  }
  public resetRestoreWindowDays() {
    this._restoreWindowDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreWindowDaysInput() {
    return this._restoreWindowDays;
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

  // on_demand_policy_item - computed: false, optional: false, required: true
  private _onDemandPolicyItem = new BackupCompliancePolicyOnDemandPolicyItemOutputReference(this, "on_demand_policy_item");
  public get onDemandPolicyItem() {
    return this._onDemandPolicyItem;
  }
  public putOnDemandPolicyItem(value: BackupCompliancePolicyOnDemandPolicyItem) {
    this._onDemandPolicyItem.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandPolicyItemInput() {
    return this._onDemandPolicyItem.internalValue;
  }

  // policy_item_daily - computed: false, optional: true, required: false
  private _policyItemDaily = new BackupCompliancePolicyPolicyItemDailyOutputReference(this, "policy_item_daily");
  public get policyItemDaily() {
    return this._policyItemDaily;
  }
  public putPolicyItemDaily(value: BackupCompliancePolicyPolicyItemDaily) {
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
  private _policyItemHourly = new BackupCompliancePolicyPolicyItemHourlyOutputReference(this, "policy_item_hourly");
  public get policyItemHourly() {
    return this._policyItemHourly;
  }
  public putPolicyItemHourly(value: BackupCompliancePolicyPolicyItemHourly) {
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
  private _policyItemMonthly = new BackupCompliancePolicyPolicyItemMonthlyList(this, "policy_item_monthly", false);
  public get policyItemMonthly() {
    return this._policyItemMonthly;
  }
  public putPolicyItemMonthly(value: BackupCompliancePolicyPolicyItemMonthly[] | cdktf.IResolvable) {
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
  private _policyItemWeekly = new BackupCompliancePolicyPolicyItemWeeklyList(this, "policy_item_weekly", false);
  public get policyItemWeekly() {
    return this._policyItemWeekly;
  }
  public putPolicyItemWeekly(value: BackupCompliancePolicyPolicyItemWeekly[] | cdktf.IResolvable) {
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
      authorized_email: cdktf.stringToTerraform(this._authorizedEmail),
      copy_protection_enabled: cdktf.booleanToTerraform(this._copyProtectionEnabled),
      encryption_at_rest_enabled: cdktf.booleanToTerraform(this._encryptionAtRestEnabled),
      id: cdktf.stringToTerraform(this._id),
      pit_enabled: cdktf.booleanToTerraform(this._pitEnabled),
      project_id: cdktf.stringToTerraform(this._projectId),
      restore_window_days: cdktf.numberToTerraform(this._restoreWindowDays),
      on_demand_policy_item: backupCompliancePolicyOnDemandPolicyItemToTerraform(this._onDemandPolicyItem.internalValue),
      policy_item_daily: backupCompliancePolicyPolicyItemDailyToTerraform(this._policyItemDaily.internalValue),
      policy_item_hourly: backupCompliancePolicyPolicyItemHourlyToTerraform(this._policyItemHourly.internalValue),
      policy_item_monthly: cdktf.listMapper(backupCompliancePolicyPolicyItemMonthlyToTerraform, true)(this._policyItemMonthly.internalValue),
      policy_item_weekly: cdktf.listMapper(backupCompliancePolicyPolicyItemWeeklyToTerraform, true)(this._policyItemWeekly.internalValue),
    };
  }
}
