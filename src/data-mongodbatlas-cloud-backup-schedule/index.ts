/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/data-sources/cloud_backup_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMongodbatlasCloudBackupScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/data-sources/cloud_backup_schedule#cluster_name DataMongodbatlasCloudBackupSchedule#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/data-sources/cloud_backup_schedule#id DataMongodbatlasCloudBackupSchedule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/data-sources/cloud_backup_schedule#project_id DataMongodbatlasCloudBackupSchedule#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/data-sources/cloud_backup_schedule#use_zone_id_for_copy_settings DataMongodbatlasCloudBackupSchedule#use_zone_id_for_copy_settings}
  */
  readonly useZoneIdForCopySettings?: boolean | cdktf.IResolvable;
}
export interface DataMongodbatlasCloudBackupScheduleCopySettings {
}

export function dataMongodbatlasCloudBackupScheduleCopySettingsToTerraform(struct?: DataMongodbatlasCloudBackupScheduleCopySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasCloudBackupScheduleCopySettingsToHclTerraform(struct?: DataMongodbatlasCloudBackupScheduleCopySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasCloudBackupScheduleCopySettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasCloudBackupScheduleCopySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasCloudBackupScheduleCopySettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud_provider - computed: true, optional: false, required: false
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }

  // frequencies - computed: true, optional: false, required: false
  public get frequencies() {
    return cdktf.Fn.tolist(this.getListAttribute('frequencies'));
  }

  // region_name - computed: true, optional: false, required: false
  public get regionName() {
    return this.getStringAttribute('region_name');
  }

  // replication_spec_id - computed: true, optional: false, required: false
  public get replicationSpecId() {
    return this.getStringAttribute('replication_spec_id');
  }

  // should_copy_oplogs - computed: true, optional: false, required: false
  public get shouldCopyOplogs() {
    return this.getBooleanAttribute('should_copy_oplogs');
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
}

export class DataMongodbatlasCloudBackupScheduleCopySettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasCloudBackupScheduleCopySettingsOutputReference {
    return new DataMongodbatlasCloudBackupScheduleCopySettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasCloudBackupScheduleExport {
}

export function dataMongodbatlasCloudBackupScheduleExportToTerraform(struct?: DataMongodbatlasCloudBackupScheduleExport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasCloudBackupScheduleExportToHclTerraform(struct?: DataMongodbatlasCloudBackupScheduleExport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasCloudBackupScheduleExportOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasCloudBackupScheduleExport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasCloudBackupScheduleExport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // export_bucket_id - computed: true, optional: false, required: false
  public get exportBucketId() {
    return this.getStringAttribute('export_bucket_id');
  }

  // frequency_type - computed: true, optional: false, required: false
  public get frequencyType() {
    return this.getStringAttribute('frequency_type');
  }
}

export class DataMongodbatlasCloudBackupScheduleExportList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasCloudBackupScheduleExportOutputReference {
    return new DataMongodbatlasCloudBackupScheduleExportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasCloudBackupSchedulePolicyItemDaily {
}

export function dataMongodbatlasCloudBackupSchedulePolicyItemDailyToTerraform(struct?: DataMongodbatlasCloudBackupSchedulePolicyItemDaily): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasCloudBackupSchedulePolicyItemDailyToHclTerraform(struct?: DataMongodbatlasCloudBackupSchedulePolicyItemDaily): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasCloudBackupSchedulePolicyItemDailyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasCloudBackupSchedulePolicyItemDaily | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasCloudBackupSchedulePolicyItemDaily | undefined) {
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

export class DataMongodbatlasCloudBackupSchedulePolicyItemDailyList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasCloudBackupSchedulePolicyItemDailyOutputReference {
    return new DataMongodbatlasCloudBackupSchedulePolicyItemDailyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasCloudBackupSchedulePolicyItemHourly {
}

export function dataMongodbatlasCloudBackupSchedulePolicyItemHourlyToTerraform(struct?: DataMongodbatlasCloudBackupSchedulePolicyItemHourly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasCloudBackupSchedulePolicyItemHourlyToHclTerraform(struct?: DataMongodbatlasCloudBackupSchedulePolicyItemHourly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasCloudBackupSchedulePolicyItemHourlyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasCloudBackupSchedulePolicyItemHourly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasCloudBackupSchedulePolicyItemHourly | undefined) {
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

export class DataMongodbatlasCloudBackupSchedulePolicyItemHourlyList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasCloudBackupSchedulePolicyItemHourlyOutputReference {
    return new DataMongodbatlasCloudBackupSchedulePolicyItemHourlyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasCloudBackupSchedulePolicyItemMonthly {
}

export function dataMongodbatlasCloudBackupSchedulePolicyItemMonthlyToTerraform(struct?: DataMongodbatlasCloudBackupSchedulePolicyItemMonthly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasCloudBackupSchedulePolicyItemMonthlyToHclTerraform(struct?: DataMongodbatlasCloudBackupSchedulePolicyItemMonthly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasCloudBackupSchedulePolicyItemMonthlyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasCloudBackupSchedulePolicyItemMonthly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasCloudBackupSchedulePolicyItemMonthly | undefined) {
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

export class DataMongodbatlasCloudBackupSchedulePolicyItemMonthlyList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasCloudBackupSchedulePolicyItemMonthlyOutputReference {
    return new DataMongodbatlasCloudBackupSchedulePolicyItemMonthlyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasCloudBackupSchedulePolicyItemWeekly {
}

export function dataMongodbatlasCloudBackupSchedulePolicyItemWeeklyToTerraform(struct?: DataMongodbatlasCloudBackupSchedulePolicyItemWeekly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasCloudBackupSchedulePolicyItemWeeklyToHclTerraform(struct?: DataMongodbatlasCloudBackupSchedulePolicyItemWeekly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasCloudBackupSchedulePolicyItemWeeklyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasCloudBackupSchedulePolicyItemWeekly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasCloudBackupSchedulePolicyItemWeekly | undefined) {
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

export class DataMongodbatlasCloudBackupSchedulePolicyItemWeeklyList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasCloudBackupSchedulePolicyItemWeeklyOutputReference {
    return new DataMongodbatlasCloudBackupSchedulePolicyItemWeeklyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasCloudBackupSchedulePolicyItemYearly {
}

export function dataMongodbatlasCloudBackupSchedulePolicyItemYearlyToTerraform(struct?: DataMongodbatlasCloudBackupSchedulePolicyItemYearly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasCloudBackupSchedulePolicyItemYearlyToHclTerraform(struct?: DataMongodbatlasCloudBackupSchedulePolicyItemYearly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasCloudBackupSchedulePolicyItemYearlyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasCloudBackupSchedulePolicyItemYearly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasCloudBackupSchedulePolicyItemYearly | undefined) {
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

export class DataMongodbatlasCloudBackupSchedulePolicyItemYearlyList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasCloudBackupSchedulePolicyItemYearlyOutputReference {
    return new DataMongodbatlasCloudBackupSchedulePolicyItemYearlyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/data-sources/cloud_backup_schedule mongodbatlas_cloud_backup_schedule}
*/
export class DataMongodbatlasCloudBackupSchedule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_cloud_backup_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMongodbatlasCloudBackupSchedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMongodbatlasCloudBackupSchedule to import
  * @param importFromId The id of the existing DataMongodbatlasCloudBackupSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/data-sources/cloud_backup_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMongodbatlasCloudBackupSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_cloud_backup_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.18.0/docs/data-sources/cloud_backup_schedule mongodbatlas_cloud_backup_schedule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMongodbatlasCloudBackupScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: DataMongodbatlasCloudBackupScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_cloud_backup_schedule',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.18.0',
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
    this._useZoneIdForCopySettings = config.useZoneIdForCopySettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_export_enabled - computed: true, optional: false, required: false
  public get autoExportEnabled() {
    return this.getBooleanAttribute('auto_export_enabled');
  }

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

  // copy_settings - computed: true, optional: false, required: false
  private _copySettings = new DataMongodbatlasCloudBackupScheduleCopySettingsList(this, "copy_settings", false);
  public get copySettings() {
    return this._copySettings;
  }

  // export - computed: true, optional: false, required: false
  private _export = new DataMongodbatlasCloudBackupScheduleExportList(this, "export", false);
  public get export() {
    return this._export;
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

  // id_policy - computed: true, optional: false, required: false
  public get idPolicy() {
    return this.getStringAttribute('id_policy');
  }

  // next_snapshot - computed: true, optional: false, required: false
  public get nextSnapshot() {
    return this.getStringAttribute('next_snapshot');
  }

  // policy_item_daily - computed: true, optional: false, required: false
  private _policyItemDaily = new DataMongodbatlasCloudBackupSchedulePolicyItemDailyList(this, "policy_item_daily", false);
  public get policyItemDaily() {
    return this._policyItemDaily;
  }

  // policy_item_hourly - computed: true, optional: false, required: false
  private _policyItemHourly = new DataMongodbatlasCloudBackupSchedulePolicyItemHourlyList(this, "policy_item_hourly", false);
  public get policyItemHourly() {
    return this._policyItemHourly;
  }

  // policy_item_monthly - computed: true, optional: false, required: false
  private _policyItemMonthly = new DataMongodbatlasCloudBackupSchedulePolicyItemMonthlyList(this, "policy_item_monthly", false);
  public get policyItemMonthly() {
    return this._policyItemMonthly;
  }

  // policy_item_weekly - computed: true, optional: false, required: false
  private _policyItemWeekly = new DataMongodbatlasCloudBackupSchedulePolicyItemWeeklyList(this, "policy_item_weekly", false);
  public get policyItemWeekly() {
    return this._policyItemWeekly;
  }

  // policy_item_yearly - computed: true, optional: false, required: false
  private _policyItemYearly = new DataMongodbatlasCloudBackupSchedulePolicyItemYearlyList(this, "policy_item_yearly", false);
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

  // reference_hour_of_day - computed: true, optional: false, required: false
  public get referenceHourOfDay() {
    return this.getNumberAttribute('reference_hour_of_day');
  }

  // reference_minute_of_hour - computed: true, optional: false, required: false
  public get referenceMinuteOfHour() {
    return this.getNumberAttribute('reference_minute_of_hour');
  }

  // restore_window_days - computed: true, optional: false, required: false
  public get restoreWindowDays() {
    return this.getNumberAttribute('restore_window_days');
  }

  // use_org_and_group_names_in_export_prefix - computed: true, optional: false, required: false
  public get useOrgAndGroupNamesInExportPrefix() {
    return this.getBooleanAttribute('use_org_and_group_names_in_export_prefix');
  }

  // use_zone_id_for_copy_settings - computed: false, optional: true, required: false
  private _useZoneIdForCopySettings?: boolean | cdktf.IResolvable; 
  public get useZoneIdForCopySettings() {
    return this.getBooleanAttribute('use_zone_id_for_copy_settings');
  }
  public set useZoneIdForCopySettings(value: boolean | cdktf.IResolvable) {
    this._useZoneIdForCopySettings = value;
  }
  public resetUseZoneIdForCopySettings() {
    this._useZoneIdForCopySettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useZoneIdForCopySettingsInput() {
    return this._useZoneIdForCopySettings;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      use_zone_id_for_copy_settings: cdktf.booleanToTerraform(this._useZoneIdForCopySettings),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      use_zone_id_for_copy_settings: {
        value: cdktf.booleanToHclTerraform(this._useZoneIdForCopySettings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
