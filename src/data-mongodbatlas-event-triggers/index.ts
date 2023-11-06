// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/data-sources/event_triggers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMongodbatlasEventTriggersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/data-sources/event_triggers#app_id DataMongodbatlasEventTriggers#app_id}
  */
  readonly appId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/data-sources/event_triggers#id DataMongodbatlasEventTriggers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/data-sources/event_triggers#project_id DataMongodbatlasEventTriggers#project_id}
  */
  readonly projectId: string;
}
export interface DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridge {
}

export function dataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeToTerraform(struct?: DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_account_id - computed: true, optional: false, required: false
  public get configAccountId() {
    return this.getStringAttribute('config_account_id');
  }

  // config_region - computed: true, optional: false, required: false
  public get configRegion() {
    return this.getStringAttribute('config_region');
  }
}

export class DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference {
    return new DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasEventTriggersResultsEventProcessors {
}

export function dataMongodbatlasEventTriggersResultsEventProcessorsToTerraform(struct?: DataMongodbatlasEventTriggersResultsEventProcessors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasEventTriggersResultsEventProcessors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasEventTriggersResultsEventProcessors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_eventbridge - computed: true, optional: false, required: false
  private _awsEventbridge = new DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList(this, "aws_eventbridge", false);
  public get awsEventbridge() {
    return this._awsEventbridge;
  }
}

export class DataMongodbatlasEventTriggersResultsEventProcessorsList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference {
    return new DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasEventTriggersResults {
}

export function dataMongodbatlasEventTriggersResultsToTerraform(struct?: DataMongodbatlasEventTriggersResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataMongodbatlasEventTriggersResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasEventTriggersResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasEventTriggersResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_collection - computed: true, optional: false, required: false
  public get configCollection() {
    return this.getStringAttribute('config_collection');
  }

  // config_database - computed: true, optional: false, required: false
  public get configDatabase() {
    return this.getStringAttribute('config_database');
  }

  // config_full_document - computed: true, optional: false, required: false
  public get configFullDocument() {
    return this.getBooleanAttribute('config_full_document');
  }

  // config_full_document_before - computed: true, optional: false, required: false
  public get configFullDocumentBefore() {
    return this.getBooleanAttribute('config_full_document_before');
  }

  // config_match - computed: true, optional: false, required: false
  public get configMatch() {
    return this.getStringAttribute('config_match');
  }

  // config_operation_type - computed: true, optional: false, required: false
  public get configOperationType() {
    return this.getStringAttribute('config_operation_type');
  }

  // config_operation_types - computed: true, optional: false, required: false
  public get configOperationTypes() {
    return this.getListAttribute('config_operation_types');
  }

  // config_project - computed: true, optional: false, required: false
  public get configProject() {
    return this.getStringAttribute('config_project');
  }

  // config_providers - computed: true, optional: false, required: false
  public get configProviders() {
    return this.getListAttribute('config_providers');
  }

  // config_schedule - computed: true, optional: false, required: false
  public get configSchedule() {
    return this.getStringAttribute('config_schedule');
  }

  // config_schedule_type - computed: true, optional: false, required: false
  public get configScheduleType() {
    return this.getStringAttribute('config_schedule_type');
  }

  // config_service_id - computed: true, optional: false, required: false
  public get configServiceId() {
    return this.getStringAttribute('config_service_id');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // event_processors - computed: true, optional: false, required: false
  private _eventProcessors = new DataMongodbatlasEventTriggersResultsEventProcessorsList(this, "event_processors", false);
  public get eventProcessors() {
    return this._eventProcessors;
  }

  // function_id - computed: true, optional: false, required: false
  public get functionId() {
    return this.getStringAttribute('function_id');
  }

  // function_name - computed: true, optional: false, required: false
  public get functionName() {
    return this.getStringAttribute('function_name');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // trigger_id - computed: true, optional: false, required: false
  public get triggerId() {
    return this.getStringAttribute('trigger_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // unordered - computed: true, optional: false, required: false
  public get unordered() {
    return this.getBooleanAttribute('unordered');
  }
}

export class DataMongodbatlasEventTriggersResultsList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasEventTriggersResultsOutputReference {
    return new DataMongodbatlasEventTriggersResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/data-sources/event_triggers mongodbatlas_event_triggers}
*/
export class DataMongodbatlasEventTriggers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_event_triggers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMongodbatlasEventTriggers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMongodbatlasEventTriggers to import
  * @param importFromId The id of the existing DataMongodbatlasEventTriggers that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/data-sources/event_triggers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMongodbatlasEventTriggers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_event_triggers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/data-sources/event_triggers mongodbatlas_event_triggers} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMongodbatlasEventTriggersConfig
  */
  public constructor(scope: Construct, id: string, config: DataMongodbatlasEventTriggersConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_event_triggers',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.12.3',
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
    this._appId = config.appId;
    this._id = config.id;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_id - computed: false, optional: false, required: true
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
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

  // results - computed: true, optional: false, required: false
  private _results = new DataMongodbatlasEventTriggersResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_id: cdktf.stringToTerraform(this._appId),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }
}
