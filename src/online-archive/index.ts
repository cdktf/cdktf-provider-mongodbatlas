// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/resources/online_archive
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OnlineArchiveConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/resources/online_archive#cluster_name OnlineArchive#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/resources/online_archive#coll_name OnlineArchive#coll_name}
  */
  readonly collName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/resources/online_archive#collection_type OnlineArchive#collection_type}
  */
  readonly collectionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/resources/online_archive#db_name OnlineArchive#db_name}
  */
  readonly dbName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/resources/online_archive#id OnlineArchive#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/resources/online_archive#paused OnlineArchive#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/resources/online_archive#project_id OnlineArchive#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/resources/online_archive#sync_creation OnlineArchive#sync_creation}
  */
  readonly syncCreation?: boolean | cdktf.IResolvable;
  /**
  * criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/resources/online_archive#criteria OnlineArchive#criteria}
  */
  readonly criteria: OnlineArchiveCriteria;
  /**
  * partition_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/resources/online_archive#partition_fields OnlineArchive#partition_fields}
  */
  readonly partitionFields?: OnlineArchivePartitionFields[] | cdktf.IResolvable;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/resources/online_archive#schedule OnlineArchive#schedule}
  */
  readonly schedule?: OnlineArchiveSchedule;
}
export interface OnlineArchiveCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/resources/online_archive#date_field OnlineArchive#date_field}
  */
  readonly dateField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/resources/online_archive#date_format OnlineArchive#date_format}
  */
  readonly dateFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/resources/online_archive#expire_after_days OnlineArchive#expire_after_days}
  */
  readonly expireAfterDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/resources/online_archive#query OnlineArchive#query}
  */
  readonly query?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/resources/online_archive#type OnlineArchive#type}
  */
  readonly type: string;
}

export function onlineArchiveCriteriaToTerraform(struct?: OnlineArchiveCriteriaOutputReference | OnlineArchiveCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    date_field: cdktf.stringToTerraform(struct!.dateField),
    date_format: cdktf.stringToTerraform(struct!.dateFormat),
    expire_after_days: cdktf.numberToTerraform(struct!.expireAfterDays),
    query: cdktf.stringToTerraform(struct!.query),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class OnlineArchiveCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OnlineArchiveCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dateField !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateField = this._dateField;
    }
    if (this._dateFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateFormat = this._dateFormat;
    }
    if (this._expireAfterDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.expireAfterDays = this._expireAfterDays;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OnlineArchiveCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dateField = undefined;
      this._dateFormat = undefined;
      this._expireAfterDays = undefined;
      this._query = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dateField = value.dateField;
      this._dateFormat = value.dateFormat;
      this._expireAfterDays = value.expireAfterDays;
      this._query = value.query;
      this._type = value.type;
    }
  }

  // date_field - computed: false, optional: true, required: false
  private _dateField?: string; 
  public get dateField() {
    return this.getStringAttribute('date_field');
  }
  public set dateField(value: string) {
    this._dateField = value;
  }
  public resetDateField() {
    this._dateField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateFieldInput() {
    return this._dateField;
  }

  // date_format - computed: true, optional: true, required: false
  private _dateFormat?: string; 
  public get dateFormat() {
    return this.getStringAttribute('date_format');
  }
  public set dateFormat(value: string) {
    this._dateFormat = value;
  }
  public resetDateFormat() {
    this._dateFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateFormatInput() {
    return this._dateFormat;
  }

  // expire_after_days - computed: false, optional: true, required: false
  private _expireAfterDays?: number; 
  public get expireAfterDays() {
    return this.getNumberAttribute('expire_after_days');
  }
  public set expireAfterDays(value: number) {
    this._expireAfterDays = value;
  }
  public resetExpireAfterDays() {
    this._expireAfterDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireAfterDaysInput() {
    return this._expireAfterDays;
  }

  // query - computed: false, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface OnlineArchivePartitionFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/resources/online_archive#field_name OnlineArchive#field_name}
  */
  readonly fieldName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/resources/online_archive#order OnlineArchive#order}
  */
  readonly order: number;
}

export function onlineArchivePartitionFieldsToTerraform(struct?: OnlineArchivePartitionFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_name: cdktf.stringToTerraform(struct!.fieldName),
    order: cdktf.numberToTerraform(struct!.order),
  }
}

export class OnlineArchivePartitionFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OnlineArchivePartitionFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OnlineArchivePartitionFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldName = undefined;
      this._order = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldName = value.fieldName;
      this._order = value.order;
    }
  }

  // field_name - computed: false, optional: false, required: true
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // field_type - computed: true, optional: false, required: false
  public get fieldType() {
    return this.getStringAttribute('field_type');
  }

  // order - computed: false, optional: false, required: true
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }
}

export class OnlineArchivePartitionFieldsList extends cdktf.ComplexList {
  public internalValue? : OnlineArchivePartitionFields[] | cdktf.IResolvable

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
  public get(index: number): OnlineArchivePartitionFieldsOutputReference {
    return new OnlineArchivePartitionFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OnlineArchiveSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/resources/online_archive#day_of_month OnlineArchive#day_of_month}
  */
  readonly dayOfMonth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/resources/online_archive#day_of_week OnlineArchive#day_of_week}
  */
  readonly dayOfWeek?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/resources/online_archive#end_hour OnlineArchive#end_hour}
  */
  readonly endHour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/resources/online_archive#end_minute OnlineArchive#end_minute}
  */
  readonly endMinute?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/resources/online_archive#start_hour OnlineArchive#start_hour}
  */
  readonly startHour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/resources/online_archive#start_minute OnlineArchive#start_minute}
  */
  readonly startMinute?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/resources/online_archive#type OnlineArchive#type}
  */
  readonly type: string;
}

export function onlineArchiveScheduleToTerraform(struct?: OnlineArchiveScheduleOutputReference | OnlineArchiveSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_month: cdktf.numberToTerraform(struct!.dayOfMonth),
    day_of_week: cdktf.numberToTerraform(struct!.dayOfWeek),
    end_hour: cdktf.numberToTerraform(struct!.endHour),
    end_minute: cdktf.numberToTerraform(struct!.endMinute),
    start_hour: cdktf.numberToTerraform(struct!.startHour),
    start_minute: cdktf.numberToTerraform(struct!.startMinute),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class OnlineArchiveScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OnlineArchiveSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfMonth = this._dayOfMonth;
    }
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._endHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.endHour = this._endHour;
    }
    if (this._endMinute !== undefined) {
      hasAnyValues = true;
      internalValueResult.endMinute = this._endMinute;
    }
    if (this._startHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.startHour = this._startHour;
    }
    if (this._startMinute !== undefined) {
      hasAnyValues = true;
      internalValueResult.startMinute = this._startMinute;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OnlineArchiveSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfMonth = undefined;
      this._dayOfWeek = undefined;
      this._endHour = undefined;
      this._endMinute = undefined;
      this._startHour = undefined;
      this._startMinute = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfMonth = value.dayOfMonth;
      this._dayOfWeek = value.dayOfWeek;
      this._endHour = value.endHour;
      this._endMinute = value.endMinute;
      this._startHour = value.startHour;
      this._startMinute = value.startMinute;
      this._type = value.type;
    }
  }

  // day_of_month - computed: false, optional: true, required: false
  private _dayOfMonth?: number; 
  public get dayOfMonth() {
    return this.getNumberAttribute('day_of_month');
  }
  public set dayOfMonth(value: number) {
    this._dayOfMonth = value;
  }
  public resetDayOfMonth() {
    this._dayOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfMonthInput() {
    return this._dayOfMonth;
  }

  // day_of_week - computed: false, optional: true, required: false
  private _dayOfWeek?: number; 
  public get dayOfWeek() {
    return this.getNumberAttribute('day_of_week');
  }
  public set dayOfWeek(value: number) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // end_hour - computed: false, optional: true, required: false
  private _endHour?: number; 
  public get endHour() {
    return this.getNumberAttribute('end_hour');
  }
  public set endHour(value: number) {
    this._endHour = value;
  }
  public resetEndHour() {
    this._endHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endHourInput() {
    return this._endHour;
  }

  // end_minute - computed: false, optional: true, required: false
  private _endMinute?: number; 
  public get endMinute() {
    return this.getNumberAttribute('end_minute');
  }
  public set endMinute(value: number) {
    this._endMinute = value;
  }
  public resetEndMinute() {
    this._endMinute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endMinuteInput() {
    return this._endMinute;
  }

  // start_hour - computed: false, optional: true, required: false
  private _startHour?: number; 
  public get startHour() {
    return this.getNumberAttribute('start_hour');
  }
  public set startHour(value: number) {
    this._startHour = value;
  }
  public resetStartHour() {
    this._startHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startHourInput() {
    return this._startHour;
  }

  // start_minute - computed: false, optional: true, required: false
  private _startMinute?: number; 
  public get startMinute() {
    return this.getNumberAttribute('start_minute');
  }
  public set startMinute(value: number) {
    this._startMinute = value;
  }
  public resetStartMinute() {
    this._startMinute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startMinuteInput() {
    return this._startMinute;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/resources/online_archive mongodbatlas_online_archive}
*/
export class OnlineArchive extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_online_archive";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.0/docs/resources/online_archive mongodbatlas_online_archive} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OnlineArchiveConfig
  */
  public constructor(scope: Construct, id: string, config: OnlineArchiveConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_online_archive',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.12.0',
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
    this._collName = config.collName;
    this._collectionType = config.collectionType;
    this._dbName = config.dbName;
    this._id = config.id;
    this._paused = config.paused;
    this._projectId = config.projectId;
    this._syncCreation = config.syncCreation;
    this._criteria.internalValue = config.criteria;
    this._partitionFields.internalValue = config.partitionFields;
    this._schedule.internalValue = config.schedule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // archive_id - computed: true, optional: false, required: false
  public get archiveId() {
    return this.getStringAttribute('archive_id');
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

  // coll_name - computed: false, optional: false, required: true
  private _collName?: string; 
  public get collName() {
    return this.getStringAttribute('coll_name');
  }
  public set collName(value: string) {
    this._collName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collNameInput() {
    return this._collName;
  }

  // collection_type - computed: true, optional: true, required: false
  private _collectionType?: string; 
  public get collectionType() {
    return this.getStringAttribute('collection_type');
  }
  public set collectionType(value: string) {
    this._collectionType = value;
  }
  public resetCollectionType() {
    this._collectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionTypeInput() {
    return this._collectionType;
  }

  // db_name - computed: false, optional: false, required: true
  private _dbName?: string; 
  public get dbName() {
    return this.getStringAttribute('db_name');
  }
  public set dbName(value: string) {
    this._dbName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNameInput() {
    return this._dbName;
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

  // paused - computed: true, optional: true, required: false
  private _paused?: boolean | cdktf.IResolvable; 
  public get paused() {
    return this.getBooleanAttribute('paused');
  }
  public set paused(value: boolean | cdktf.IResolvable) {
    this._paused = value;
  }
  public resetPaused() {
    this._paused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pausedInput() {
    return this._paused;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // sync_creation - computed: false, optional: true, required: false
  private _syncCreation?: boolean | cdktf.IResolvable; 
  public get syncCreation() {
    return this.getBooleanAttribute('sync_creation');
  }
  public set syncCreation(value: boolean | cdktf.IResolvable) {
    this._syncCreation = value;
  }
  public resetSyncCreation() {
    this._syncCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncCreationInput() {
    return this._syncCreation;
  }

  // criteria - computed: false, optional: false, required: true
  private _criteria = new OnlineArchiveCriteriaOutputReference(this, "criteria");
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: OnlineArchiveCriteria) {
    this._criteria.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
  }

  // partition_fields - computed: false, optional: true, required: false
  private _partitionFields = new OnlineArchivePartitionFieldsList(this, "partition_fields", false);
  public get partitionFields() {
    return this._partitionFields;
  }
  public putPartitionFields(value: OnlineArchivePartitionFields[] | cdktf.IResolvable) {
    this._partitionFields.internalValue = value;
  }
  public resetPartitionFields() {
    this._partitionFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionFieldsInput() {
    return this._partitionFields.internalValue;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new OnlineArchiveScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: OnlineArchiveSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      coll_name: cdktf.stringToTerraform(this._collName),
      collection_type: cdktf.stringToTerraform(this._collectionType),
      db_name: cdktf.stringToTerraform(this._dbName),
      id: cdktf.stringToTerraform(this._id),
      paused: cdktf.booleanToTerraform(this._paused),
      project_id: cdktf.stringToTerraform(this._projectId),
      sync_creation: cdktf.booleanToTerraform(this._syncCreation),
      criteria: onlineArchiveCriteriaToTerraform(this._criteria.internalValue),
      partition_fields: cdktf.listMapper(onlineArchivePartitionFieldsToTerraform, true)(this._partitionFields.internalValue),
      schedule: onlineArchiveScheduleToTerraform(this._schedule.internalValue),
    };
  }
}
