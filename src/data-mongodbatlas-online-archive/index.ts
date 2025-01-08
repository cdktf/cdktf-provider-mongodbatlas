/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/data-sources/online_archive
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMongodbatlasOnlineArchiveConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/data-sources/online_archive#archive_id DataMongodbatlasOnlineArchive#archive_id}
  */
  readonly archiveId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/data-sources/online_archive#cluster_name DataMongodbatlasOnlineArchive#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/data-sources/online_archive#id DataMongodbatlasOnlineArchive#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/data-sources/online_archive#project_id DataMongodbatlasOnlineArchive#project_id}
  */
  readonly projectId: string;
}
export interface DataMongodbatlasOnlineArchiveCriteria {
}

export function dataMongodbatlasOnlineArchiveCriteriaToTerraform(struct?: DataMongodbatlasOnlineArchiveCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasOnlineArchiveCriteriaToHclTerraform(struct?: DataMongodbatlasOnlineArchiveCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasOnlineArchiveCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasOnlineArchiveCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasOnlineArchiveCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // date_field - computed: true, optional: false, required: false
  public get dateField() {
    return this.getStringAttribute('date_field');
  }

  // date_format - computed: true, optional: false, required: false
  public get dateFormat() {
    return this.getStringAttribute('date_format');
  }

  // expire_after_days - computed: true, optional: false, required: false
  public get expireAfterDays() {
    return this.getNumberAttribute('expire_after_days');
  }

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataMongodbatlasOnlineArchiveCriteriaList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasOnlineArchiveCriteriaOutputReference {
    return new DataMongodbatlasOnlineArchiveCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasOnlineArchiveDataExpirationRule {
}

export function dataMongodbatlasOnlineArchiveDataExpirationRuleToTerraform(struct?: DataMongodbatlasOnlineArchiveDataExpirationRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasOnlineArchiveDataExpirationRuleToHclTerraform(struct?: DataMongodbatlasOnlineArchiveDataExpirationRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasOnlineArchiveDataExpirationRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasOnlineArchiveDataExpirationRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasOnlineArchiveDataExpirationRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expire_after_days - computed: true, optional: false, required: false
  public get expireAfterDays() {
    return this.getNumberAttribute('expire_after_days');
  }
}

export class DataMongodbatlasOnlineArchiveDataExpirationRuleList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasOnlineArchiveDataExpirationRuleOutputReference {
    return new DataMongodbatlasOnlineArchiveDataExpirationRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasOnlineArchiveDataProcessRegion {
}

export function dataMongodbatlasOnlineArchiveDataProcessRegionToTerraform(struct?: DataMongodbatlasOnlineArchiveDataProcessRegion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasOnlineArchiveDataProcessRegionToHclTerraform(struct?: DataMongodbatlasOnlineArchiveDataProcessRegion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasOnlineArchiveDataProcessRegionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasOnlineArchiveDataProcessRegion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasOnlineArchiveDataProcessRegion | undefined) {
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

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DataMongodbatlasOnlineArchiveDataProcessRegionList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasOnlineArchiveDataProcessRegionOutputReference {
    return new DataMongodbatlasOnlineArchiveDataProcessRegionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasOnlineArchivePartitionFields {
}

export function dataMongodbatlasOnlineArchivePartitionFieldsToTerraform(struct?: DataMongodbatlasOnlineArchivePartitionFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasOnlineArchivePartitionFieldsToHclTerraform(struct?: DataMongodbatlasOnlineArchivePartitionFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasOnlineArchivePartitionFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasOnlineArchivePartitionFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasOnlineArchivePartitionFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_name - computed: true, optional: false, required: false
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }

  // field_type - computed: true, optional: false, required: false
  public get fieldType() {
    return this.getStringAttribute('field_type');
  }

  // order - computed: true, optional: false, required: false
  public get order() {
    return this.getNumberAttribute('order');
  }
}

export class DataMongodbatlasOnlineArchivePartitionFieldsList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasOnlineArchivePartitionFieldsOutputReference {
    return new DataMongodbatlasOnlineArchivePartitionFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasOnlineArchiveSchedule {
}

export function dataMongodbatlasOnlineArchiveScheduleToTerraform(struct?: DataMongodbatlasOnlineArchiveSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasOnlineArchiveScheduleToHclTerraform(struct?: DataMongodbatlasOnlineArchiveSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasOnlineArchiveScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasOnlineArchiveSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasOnlineArchiveSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // day_of_month - computed: true, optional: false, required: false
  public get dayOfMonth() {
    return this.getNumberAttribute('day_of_month');
  }

  // day_of_week - computed: true, optional: false, required: false
  public get dayOfWeek() {
    return this.getNumberAttribute('day_of_week');
  }

  // end_hour - computed: true, optional: false, required: false
  public get endHour() {
    return this.getNumberAttribute('end_hour');
  }

  // end_minute - computed: true, optional: false, required: false
  public get endMinute() {
    return this.getNumberAttribute('end_minute');
  }

  // start_hour - computed: true, optional: false, required: false
  public get startHour() {
    return this.getNumberAttribute('start_hour');
  }

  // start_minute - computed: true, optional: false, required: false
  public get startMinute() {
    return this.getNumberAttribute('start_minute');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataMongodbatlasOnlineArchiveScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasOnlineArchiveScheduleOutputReference {
    return new DataMongodbatlasOnlineArchiveScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/data-sources/online_archive mongodbatlas_online_archive}
*/
export class DataMongodbatlasOnlineArchive extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_online_archive";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMongodbatlasOnlineArchive resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMongodbatlasOnlineArchive to import
  * @param importFromId The id of the existing DataMongodbatlasOnlineArchive that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/data-sources/online_archive#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMongodbatlasOnlineArchive to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_online_archive", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/data-sources/online_archive mongodbatlas_online_archive} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMongodbatlasOnlineArchiveConfig
  */
  public constructor(scope: Construct, id: string, config: DataMongodbatlasOnlineArchiveConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_online_archive',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.25.0',
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
    this._archiveId = config.archiveId;
    this._clusterName = config.clusterName;
    this._id = config.id;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // archive_id - computed: false, optional: false, required: true
  private _archiveId?: string; 
  public get archiveId() {
    return this.getStringAttribute('archive_id');
  }
  public set archiveId(value: string) {
    this._archiveId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveIdInput() {
    return this._archiveId;
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

  // coll_name - computed: true, optional: false, required: false
  public get collName() {
    return this.getStringAttribute('coll_name');
  }

  // collection_type - computed: true, optional: false, required: false
  public get collectionType() {
    return this.getStringAttribute('collection_type');
  }

  // criteria - computed: true, optional: false, required: false
  private _criteria = new DataMongodbatlasOnlineArchiveCriteriaList(this, "criteria", false);
  public get criteria() {
    return this._criteria;
  }

  // data_expiration_rule - computed: true, optional: false, required: false
  private _dataExpirationRule = new DataMongodbatlasOnlineArchiveDataExpirationRuleList(this, "data_expiration_rule", false);
  public get dataExpirationRule() {
    return this._dataExpirationRule;
  }

  // data_process_region - computed: true, optional: false, required: false
  private _dataProcessRegion = new DataMongodbatlasOnlineArchiveDataProcessRegionList(this, "data_process_region", false);
  public get dataProcessRegion() {
    return this._dataProcessRegion;
  }

  // db_name - computed: true, optional: false, required: false
  public get dbName() {
    return this.getStringAttribute('db_name');
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

  // partition_fields - computed: true, optional: false, required: false
  private _partitionFields = new DataMongodbatlasOnlineArchivePartitionFieldsList(this, "partition_fields", false);
  public get partitionFields() {
    return this._partitionFields;
  }

  // paused - computed: true, optional: false, required: false
  public get paused() {
    return this.getBooleanAttribute('paused');
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

  // schedule - computed: true, optional: false, required: false
  private _schedule = new DataMongodbatlasOnlineArchiveScheduleList(this, "schedule", false);
  public get schedule() {
    return this._schedule;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      archive_id: cdktf.stringToTerraform(this._archiveId),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      archive_id: {
        value: cdktf.stringToHclTerraform(this._archiveId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
