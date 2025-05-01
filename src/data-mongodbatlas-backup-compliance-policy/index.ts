// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.34.0/docs/data-sources/backup_compliance_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMongodbatlasBackupCompliancePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.34.0/docs/data-sources/backup_compliance_policy#id DataMongodbatlasBackupCompliancePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.34.0/docs/data-sources/backup_compliance_policy#project_id DataMongodbatlasBackupCompliancePolicy#project_id}
  */
  readonly projectId: string;
}
export interface DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItem {
}

export function dataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemToTerraform(struct?: DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemToHclTerraform(struct?: DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
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

export class DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference {
    return new DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasBackupCompliancePolicyPolicyItemDaily {
}

export function dataMongodbatlasBackupCompliancePolicyPolicyItemDailyToTerraform(struct?: DataMongodbatlasBackupCompliancePolicyPolicyItemDaily): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasBackupCompliancePolicyPolicyItemDailyToHclTerraform(struct?: DataMongodbatlasBackupCompliancePolicyPolicyItemDaily): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMongodbatlasBackupCompliancePolicyPolicyItemDaily | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasBackupCompliancePolicyPolicyItemDaily | undefined) {
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

export class DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference {
    return new DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasBackupCompliancePolicyPolicyItemHourly {
}

export function dataMongodbatlasBackupCompliancePolicyPolicyItemHourlyToTerraform(struct?: DataMongodbatlasBackupCompliancePolicyPolicyItemHourly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasBackupCompliancePolicyPolicyItemHourlyToHclTerraform(struct?: DataMongodbatlasBackupCompliancePolicyPolicyItemHourly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMongodbatlasBackupCompliancePolicyPolicyItemHourly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasBackupCompliancePolicyPolicyItemHourly | undefined) {
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

export class DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference {
    return new DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly {
}

export function dataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyToTerraform(struct?: DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyToHclTerraform(struct?: DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly | undefined) {
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

export class DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList extends cdktf.ComplexList {

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
}

export function dataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyToTerraform(struct?: DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyToHclTerraform(struct?: DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly | undefined) {
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

export class DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList extends cdktf.ComplexList {

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
export interface DataMongodbatlasBackupCompliancePolicyPolicyItemYearly {
}

export function dataMongodbatlasBackupCompliancePolicyPolicyItemYearlyToTerraform(struct?: DataMongodbatlasBackupCompliancePolicyPolicyItemYearly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasBackupCompliancePolicyPolicyItemYearlyToHclTerraform(struct?: DataMongodbatlasBackupCompliancePolicyPolicyItemYearly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMongodbatlasBackupCompliancePolicyPolicyItemYearly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasBackupCompliancePolicyPolicyItemYearly | undefined) {
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

export class DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference {
    return new DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.34.0/docs/data-sources/backup_compliance_policy mongodbatlas_backup_compliance_policy}
*/
export class DataMongodbatlasBackupCompliancePolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_backup_compliance_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMongodbatlasBackupCompliancePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMongodbatlasBackupCompliancePolicy to import
  * @param importFromId The id of the existing DataMongodbatlasBackupCompliancePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.34.0/docs/data-sources/backup_compliance_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMongodbatlasBackupCompliancePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_backup_compliance_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.34.0/docs/data-sources/backup_compliance_policy mongodbatlas_backup_compliance_policy} Data Source
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
        providerVersion: '1.34.0',
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

  // authorized_email - computed: true, optional: false, required: false
  public get authorizedEmail() {
    return this.getStringAttribute('authorized_email');
  }

  // authorized_user_first_name - computed: true, optional: false, required: false
  public get authorizedUserFirstName() {
    return this.getStringAttribute('authorized_user_first_name');
  }

  // authorized_user_last_name - computed: true, optional: false, required: false
  public get authorizedUserLastName() {
    return this.getStringAttribute('authorized_user_last_name');
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

  // on_demand_policy_item - computed: true, optional: false, required: false
  private _onDemandPolicyItem = new DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemList(this, "on_demand_policy_item", false);
  public get onDemandPolicyItem() {
    return this._onDemandPolicyItem;
  }

  // pit_enabled - computed: true, optional: false, required: false
  public get pitEnabled() {
    return this.getBooleanAttribute('pit_enabled');
  }

  // policy_item_daily - computed: true, optional: false, required: false
  private _policyItemDaily = new DataMongodbatlasBackupCompliancePolicyPolicyItemDailyList(this, "policy_item_daily", false);
  public get policyItemDaily() {
    return this._policyItemDaily;
  }

  // policy_item_hourly - computed: true, optional: false, required: false
  private _policyItemHourly = new DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyList(this, "policy_item_hourly", false);
  public get policyItemHourly() {
    return this._policyItemHourly;
  }

  // policy_item_monthly - computed: true, optional: false, required: false
  private _policyItemMonthly = new DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList(this, "policy_item_monthly", false);
  public get policyItemMonthly() {
    return this._policyItemMonthly;
  }

  // policy_item_weekly - computed: true, optional: false, required: false
  private _policyItemWeekly = new DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList(this, "policy_item_weekly", false);
  public get policyItemWeekly() {
    return this._policyItemWeekly;
  }

  // policy_item_yearly - computed: true, optional: false, required: false
  private _policyItemYearly = new DataMongodbatlasBackupCompliancePolicyPolicyItemYearlyList(this, "policy_item_yearly", false);
  public get policyItemYearly() {
    return this._policyItemYearly;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
