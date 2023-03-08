// https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudProviderSnapshotBackupPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#cluster_name CloudProviderSnapshotBackupPolicy#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#id CloudProviderSnapshotBackupPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#project_id CloudProviderSnapshotBackupPolicy#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#reference_hour_of_day CloudProviderSnapshotBackupPolicy#reference_hour_of_day}
  */
  readonly referenceHourOfDay?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#reference_minute_of_hour CloudProviderSnapshotBackupPolicy#reference_minute_of_hour}
  */
  readonly referenceMinuteOfHour?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#restore_window_days CloudProviderSnapshotBackupPolicy#restore_window_days}
  */
  readonly restoreWindowDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#update_snapshots CloudProviderSnapshotBackupPolicy#update_snapshots}
  */
  readonly updateSnapshots?: boolean | cdktf.IResolvable;
  /**
  * policies block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#policies CloudProviderSnapshotBackupPolicy#policies}
  */
  readonly policies: CloudProviderSnapshotBackupPolicyPolicies[] | cdktf.IResolvable;
}
export interface CloudProviderSnapshotBackupPolicyPoliciesPolicyItem {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#frequency_interval CloudProviderSnapshotBackupPolicy#frequency_interval}
  */
  readonly frequencyInterval: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#frequency_type CloudProviderSnapshotBackupPolicy#frequency_type}
  */
  readonly frequencyType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#id CloudProviderSnapshotBackupPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#retention_unit CloudProviderSnapshotBackupPolicy#retention_unit}
  */
  readonly retentionUnit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#retention_value CloudProviderSnapshotBackupPolicy#retention_value}
  */
  readonly retentionValue: number;
}

export function cloudProviderSnapshotBackupPolicyPoliciesPolicyItemToTerraform(struct?: CloudProviderSnapshotBackupPolicyPoliciesPolicyItem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frequency_interval: cdktf.numberToTerraform(struct!.frequencyInterval),
    frequency_type: cdktf.stringToTerraform(struct!.frequencyType),
    id: cdktf.stringToTerraform(struct!.id),
    retention_unit: cdktf.stringToTerraform(struct!.retentionUnit),
    retention_value: cdktf.numberToTerraform(struct!.retentionValue),
  }
}

export class CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudProviderSnapshotBackupPolicyPoliciesPolicyItem | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequencyInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequencyInterval = this._frequencyInterval;
    }
    if (this._frequencyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequencyType = this._frequencyType;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
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

  public set internalValue(value: CloudProviderSnapshotBackupPolicyPoliciesPolicyItem | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._frequencyInterval = undefined;
      this._frequencyType = undefined;
      this._id = undefined;
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
      this._frequencyType = value.frequencyType;
      this._id = value.id;
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

  // frequency_type - computed: false, optional: false, required: true
  private _frequencyType?: string; 
  public get frequencyType() {
    return this.getStringAttribute('frequency_type');
  }
  public set frequencyType(value: string) {
    this._frequencyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyTypeInput() {
    return this._frequencyType;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

export class CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList extends cdktf.ComplexList {
  public internalValue? : CloudProviderSnapshotBackupPolicyPoliciesPolicyItem[] | cdktf.IResolvable

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
  public get(index: number): CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference {
    return new CloudProviderSnapshotBackupPolicyPoliciesPolicyItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudProviderSnapshotBackupPolicyPolicies {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#id CloudProviderSnapshotBackupPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * policy_item block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy#policy_item CloudProviderSnapshotBackupPolicy#policy_item}
  */
  readonly policyItem: CloudProviderSnapshotBackupPolicyPoliciesPolicyItem[] | cdktf.IResolvable;
}

export function cloudProviderSnapshotBackupPolicyPoliciesToTerraform(struct?: CloudProviderSnapshotBackupPolicyPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    policy_item: cdktf.listMapper(cloudProviderSnapshotBackupPolicyPoliciesPolicyItemToTerraform, true)(struct!.policyItem),
  }
}

export class CloudProviderSnapshotBackupPolicyPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudProviderSnapshotBackupPolicyPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._policyItem?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyItem = this._policyItem?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProviderSnapshotBackupPolicyPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._policyItem.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._policyItem.internalValue = value.policyItem;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // policy_item - computed: false, optional: false, required: true
  private _policyItem = new CloudProviderSnapshotBackupPolicyPoliciesPolicyItemList(this, "policy_item", false);
  public get policyItem() {
    return this._policyItem;
  }
  public putPolicyItem(value: CloudProviderSnapshotBackupPolicyPoliciesPolicyItem[] | cdktf.IResolvable) {
    this._policyItem.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyItemInput() {
    return this._policyItem.internalValue;
  }
}

export class CloudProviderSnapshotBackupPolicyPoliciesList extends cdktf.ComplexList {
  public internalValue? : CloudProviderSnapshotBackupPolicyPolicies[] | cdktf.IResolvable

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
  public get(index: number): CloudProviderSnapshotBackupPolicyPoliciesOutputReference {
    return new CloudProviderSnapshotBackupPolicyPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy mongodbatlas_cloud_provider_snapshot_backup_policy}
*/
export class CloudProviderSnapshotBackupPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_cloud_provider_snapshot_backup_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/mongodbatlas/r/cloud_provider_snapshot_backup_policy mongodbatlas_cloud_provider_snapshot_backup_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudProviderSnapshotBackupPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: CloudProviderSnapshotBackupPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_cloud_provider_snapshot_backup_policy',
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
    this._clusterName = config.clusterName;
    this._id = config.id;
    this._projectId = config.projectId;
    this._referenceHourOfDay = config.referenceHourOfDay;
    this._referenceMinuteOfHour = config.referenceMinuteOfHour;
    this._restoreWindowDays = config.restoreWindowDays;
    this._updateSnapshots = config.updateSnapshots;
    this._policies.internalValue = config.policies;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
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

  // next_snapshot - computed: true, optional: false, required: false
  public get nextSnapshot() {
    return this.getStringAttribute('next_snapshot');
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

  // reference_hour_of_day - computed: true, optional: true, required: false
  private _referenceHourOfDay?: number; 
  public get referenceHourOfDay() {
    return this.getNumberAttribute('reference_hour_of_day');
  }
  public set referenceHourOfDay(value: number) {
    this._referenceHourOfDay = value;
  }
  public resetReferenceHourOfDay() {
    this._referenceHourOfDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceHourOfDayInput() {
    return this._referenceHourOfDay;
  }

  // reference_minute_of_hour - computed: true, optional: true, required: false
  private _referenceMinuteOfHour?: number; 
  public get referenceMinuteOfHour() {
    return this.getNumberAttribute('reference_minute_of_hour');
  }
  public set referenceMinuteOfHour(value: number) {
    this._referenceMinuteOfHour = value;
  }
  public resetReferenceMinuteOfHour() {
    this._referenceMinuteOfHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceMinuteOfHourInput() {
    return this._referenceMinuteOfHour;
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

  // update_snapshots - computed: true, optional: true, required: false
  private _updateSnapshots?: boolean | cdktf.IResolvable; 
  public get updateSnapshots() {
    return this.getBooleanAttribute('update_snapshots');
  }
  public set updateSnapshots(value: boolean | cdktf.IResolvable) {
    this._updateSnapshots = value;
  }
  public resetUpdateSnapshots() {
    this._updateSnapshots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateSnapshotsInput() {
    return this._updateSnapshots;
  }

  // policies - computed: false, optional: false, required: true
  private _policies = new CloudProviderSnapshotBackupPolicyPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: CloudProviderSnapshotBackupPolicyPolicies[] | cdktf.IResolvable) {
    this._policies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      reference_hour_of_day: cdktf.numberToTerraform(this._referenceHourOfDay),
      reference_minute_of_hour: cdktf.numberToTerraform(this._referenceMinuteOfHour),
      restore_window_days: cdktf.numberToTerraform(this._restoreWindowDays),
      update_snapshots: cdktf.booleanToTerraform(this._updateSnapshots),
      policies: cdktf.listMapper(cloudProviderSnapshotBackupPolicyPoliciesToTerraform, true)(this._policies.internalValue),
    };
  }
}
