/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventTriggerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#app_id EventTrigger#app_id}
  */
  readonly appId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_collection EventTrigger#config_collection}
  */
  readonly configCollection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_database EventTrigger#config_database}
  */
  readonly configDatabase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_full_document EventTrigger#config_full_document}
  */
  readonly configFullDocument?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_full_document_before EventTrigger#config_full_document_before}
  */
  readonly configFullDocumentBefore?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_match EventTrigger#config_match}
  */
  readonly configMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_operation_type EventTrigger#config_operation_type}
  */
  readonly configOperationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_operation_types EventTrigger#config_operation_types}
  */
  readonly configOperationTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_project EventTrigger#config_project}
  */
  readonly configProject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_providers EventTrigger#config_providers}
  */
  readonly configProviders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_schedule EventTrigger#config_schedule}
  */
  readonly configSchedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_service_id EventTrigger#config_service_id}
  */
  readonly configServiceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#disabled EventTrigger#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#function_id EventTrigger#function_id}
  */
  readonly functionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#id EventTrigger#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#name EventTrigger#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#project_id EventTrigger#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#type EventTrigger#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#unordered EventTrigger#unordered}
  */
  readonly unordered?: boolean | cdktf.IResolvable;
  /**
  * event_processors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#event_processors EventTrigger#event_processors}
  */
  readonly eventProcessors?: EventTriggerEventProcessors;
}
export interface EventTriggerEventProcessorsAwsEventbridge {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_account_id EventTrigger#config_account_id}
  */
  readonly configAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#config_region EventTrigger#config_region}
  */
  readonly configRegion?: string;
}

export function eventTriggerEventProcessorsAwsEventbridgeToTerraform(struct?: EventTriggerEventProcessorsAwsEventbridgeOutputReference | EventTriggerEventProcessorsAwsEventbridge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_account_id: cdktf.stringToTerraform(struct!.configAccountId),
    config_region: cdktf.stringToTerraform(struct!.configRegion),
  }
}


export function eventTriggerEventProcessorsAwsEventbridgeToHclTerraform(struct?: EventTriggerEventProcessorsAwsEventbridgeOutputReference | EventTriggerEventProcessorsAwsEventbridge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_account_id: {
      value: cdktf.stringToHclTerraform(struct!.configAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_region: {
      value: cdktf.stringToHclTerraform(struct!.configRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventTriggerEventProcessorsAwsEventbridgeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventTriggerEventProcessorsAwsEventbridge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.configAccountId = this._configAccountId;
    }
    if (this._configRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.configRegion = this._configRegion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventTriggerEventProcessorsAwsEventbridge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configAccountId = undefined;
      this._configRegion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configAccountId = value.configAccountId;
      this._configRegion = value.configRegion;
    }
  }

  // config_account_id - computed: false, optional: true, required: false
  private _configAccountId?: string; 
  public get configAccountId() {
    return this.getStringAttribute('config_account_id');
  }
  public set configAccountId(value: string) {
    this._configAccountId = value;
  }
  public resetConfigAccountId() {
    this._configAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configAccountIdInput() {
    return this._configAccountId;
  }

  // config_region - computed: false, optional: true, required: false
  private _configRegion?: string; 
  public get configRegion() {
    return this.getStringAttribute('config_region');
  }
  public set configRegion(value: string) {
    this._configRegion = value;
  }
  public resetConfigRegion() {
    this._configRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configRegionInput() {
    return this._configRegion;
  }
}
export interface EventTriggerEventProcessors {
  /**
  * aws_eventbridge block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#aws_eventbridge EventTrigger#aws_eventbridge}
  */
  readonly awsEventbridge?: EventTriggerEventProcessorsAwsEventbridge;
}

export function eventTriggerEventProcessorsToTerraform(struct?: EventTriggerEventProcessorsOutputReference | EventTriggerEventProcessors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_eventbridge: eventTriggerEventProcessorsAwsEventbridgeToTerraform(struct!.awsEventbridge),
  }
}


export function eventTriggerEventProcessorsToHclTerraform(struct?: EventTriggerEventProcessorsOutputReference | EventTriggerEventProcessors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_eventbridge: {
      value: eventTriggerEventProcessorsAwsEventbridgeToHclTerraform(struct!.awsEventbridge),
      isBlock: true,
      type: "list",
      storageClassType: "EventTriggerEventProcessorsAwsEventbridgeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventTriggerEventProcessorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventTriggerEventProcessors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsEventbridge?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsEventbridge = this._awsEventbridge?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventTriggerEventProcessors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsEventbridge.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsEventbridge.internalValue = value.awsEventbridge;
    }
  }

  // aws_eventbridge - computed: false, optional: true, required: false
  private _awsEventbridge = new EventTriggerEventProcessorsAwsEventbridgeOutputReference(this, "aws_eventbridge");
  public get awsEventbridge() {
    return this._awsEventbridge;
  }
  public putAwsEventbridge(value: EventTriggerEventProcessorsAwsEventbridge) {
    this._awsEventbridge.internalValue = value;
  }
  public resetAwsEventbridge() {
    this._awsEventbridge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsEventbridgeInput() {
    return this._awsEventbridge.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger mongodbatlas_event_trigger}
*/
export class EventTrigger extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_event_trigger";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EventTrigger resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EventTrigger to import
  * @param importFromId The id of the existing EventTrigger that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EventTrigger to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_event_trigger", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.0/docs/resources/event_trigger mongodbatlas_event_trigger} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventTriggerConfig
  */
  public constructor(scope: Construct, id: string, config: EventTriggerConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_event_trigger',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.17.0',
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
    this._configCollection = config.configCollection;
    this._configDatabase = config.configDatabase;
    this._configFullDocument = config.configFullDocument;
    this._configFullDocumentBefore = config.configFullDocumentBefore;
    this._configMatch = config.configMatch;
    this._configOperationType = config.configOperationType;
    this._configOperationTypes = config.configOperationTypes;
    this._configProject = config.configProject;
    this._configProviders = config.configProviders;
    this._configSchedule = config.configSchedule;
    this._configServiceId = config.configServiceId;
    this._disabled = config.disabled;
    this._functionId = config.functionId;
    this._id = config.id;
    this._name = config.name;
    this._projectId = config.projectId;
    this._type = config.type;
    this._unordered = config.unordered;
    this._eventProcessors.internalValue = config.eventProcessors;
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

  // config_collection - computed: true, optional: true, required: false
  private _configCollection?: string; 
  public get configCollection() {
    return this.getStringAttribute('config_collection');
  }
  public set configCollection(value: string) {
    this._configCollection = value;
  }
  public resetConfigCollection() {
    this._configCollection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configCollectionInput() {
    return this._configCollection;
  }

  // config_database - computed: true, optional: true, required: false
  private _configDatabase?: string; 
  public get configDatabase() {
    return this.getStringAttribute('config_database');
  }
  public set configDatabase(value: string) {
    this._configDatabase = value;
  }
  public resetConfigDatabase() {
    this._configDatabase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configDatabaseInput() {
    return this._configDatabase;
  }

  // config_full_document - computed: true, optional: true, required: false
  private _configFullDocument?: boolean | cdktf.IResolvable; 
  public get configFullDocument() {
    return this.getBooleanAttribute('config_full_document');
  }
  public set configFullDocument(value: boolean | cdktf.IResolvable) {
    this._configFullDocument = value;
  }
  public resetConfigFullDocument() {
    this._configFullDocument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configFullDocumentInput() {
    return this._configFullDocument;
  }

  // config_full_document_before - computed: true, optional: true, required: false
  private _configFullDocumentBefore?: boolean | cdktf.IResolvable; 
  public get configFullDocumentBefore() {
    return this.getBooleanAttribute('config_full_document_before');
  }
  public set configFullDocumentBefore(value: boolean | cdktf.IResolvable) {
    this._configFullDocumentBefore = value;
  }
  public resetConfigFullDocumentBefore() {
    this._configFullDocumentBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configFullDocumentBeforeInput() {
    return this._configFullDocumentBefore;
  }

  // config_match - computed: true, optional: true, required: false
  private _configMatch?: string; 
  public get configMatch() {
    return this.getStringAttribute('config_match');
  }
  public set configMatch(value: string) {
    this._configMatch = value;
  }
  public resetConfigMatch() {
    this._configMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMatchInput() {
    return this._configMatch;
  }

  // config_operation_type - computed: true, optional: true, required: false
  private _configOperationType?: string; 
  public get configOperationType() {
    return this.getStringAttribute('config_operation_type');
  }
  public set configOperationType(value: string) {
    this._configOperationType = value;
  }
  public resetConfigOperationType() {
    this._configOperationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configOperationTypeInput() {
    return this._configOperationType;
  }

  // config_operation_types - computed: true, optional: true, required: false
  private _configOperationTypes?: string[]; 
  public get configOperationTypes() {
    return this.getListAttribute('config_operation_types');
  }
  public set configOperationTypes(value: string[]) {
    this._configOperationTypes = value;
  }
  public resetConfigOperationTypes() {
    this._configOperationTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configOperationTypesInput() {
    return this._configOperationTypes;
  }

  // config_project - computed: true, optional: true, required: false
  private _configProject?: string; 
  public get configProject() {
    return this.getStringAttribute('config_project');
  }
  public set configProject(value: string) {
    this._configProject = value;
  }
  public resetConfigProject() {
    this._configProject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configProjectInput() {
    return this._configProject;
  }

  // config_providers - computed: true, optional: true, required: false
  private _configProviders?: string[]; 
  public get configProviders() {
    return this.getListAttribute('config_providers');
  }
  public set configProviders(value: string[]) {
    this._configProviders = value;
  }
  public resetConfigProviders() {
    this._configProviders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configProvidersInput() {
    return this._configProviders;
  }

  // config_schedule - computed: true, optional: true, required: false
  private _configSchedule?: string; 
  public get configSchedule() {
    return this.getStringAttribute('config_schedule');
  }
  public set configSchedule(value: string) {
    this._configSchedule = value;
  }
  public resetConfigSchedule() {
    this._configSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configScheduleInput() {
    return this._configSchedule;
  }

  // config_schedule_type - computed: true, optional: false, required: false
  public get configScheduleType() {
    return this.getStringAttribute('config_schedule_type');
  }

  // config_service_id - computed: true, optional: true, required: false
  private _configServiceId?: string; 
  public get configServiceId() {
    return this.getStringAttribute('config_service_id');
  }
  public set configServiceId(value: string) {
    this._configServiceId = value;
  }
  public resetConfigServiceId() {
    this._configServiceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configServiceIdInput() {
    return this._configServiceId;
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // function_id - computed: false, optional: true, required: false
  private _functionId?: string; 
  public get functionId() {
    return this.getStringAttribute('function_id');
  }
  public set functionId(value: string) {
    this._functionId = value;
  }
  public resetFunctionId() {
    this._functionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionIdInput() {
    return this._functionId;
  }

  // function_name - computed: true, optional: false, required: false
  public get functionName() {
    return this.getStringAttribute('function_name');
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // trigger_id - computed: true, optional: false, required: false
  public get triggerId() {
    return this.getStringAttribute('trigger_id');
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

  // unordered - computed: true, optional: true, required: false
  private _unordered?: boolean | cdktf.IResolvable; 
  public get unordered() {
    return this.getBooleanAttribute('unordered');
  }
  public set unordered(value: boolean | cdktf.IResolvable) {
    this._unordered = value;
  }
  public resetUnordered() {
    this._unordered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unorderedInput() {
    return this._unordered;
  }

  // event_processors - computed: false, optional: true, required: false
  private _eventProcessors = new EventTriggerEventProcessorsOutputReference(this, "event_processors");
  public get eventProcessors() {
    return this._eventProcessors;
  }
  public putEventProcessors(value: EventTriggerEventProcessors) {
    this._eventProcessors.internalValue = value;
  }
  public resetEventProcessors() {
    this._eventProcessors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventProcessorsInput() {
    return this._eventProcessors.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_id: cdktf.stringToTerraform(this._appId),
      config_collection: cdktf.stringToTerraform(this._configCollection),
      config_database: cdktf.stringToTerraform(this._configDatabase),
      config_full_document: cdktf.booleanToTerraform(this._configFullDocument),
      config_full_document_before: cdktf.booleanToTerraform(this._configFullDocumentBefore),
      config_match: cdktf.stringToTerraform(this._configMatch),
      config_operation_type: cdktf.stringToTerraform(this._configOperationType),
      config_operation_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._configOperationTypes),
      config_project: cdktf.stringToTerraform(this._configProject),
      config_providers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._configProviders),
      config_schedule: cdktf.stringToTerraform(this._configSchedule),
      config_service_id: cdktf.stringToTerraform(this._configServiceId),
      disabled: cdktf.booleanToTerraform(this._disabled),
      function_id: cdktf.stringToTerraform(this._functionId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      type: cdktf.stringToTerraform(this._type),
      unordered: cdktf.booleanToTerraform(this._unordered),
      event_processors: eventTriggerEventProcessorsToTerraform(this._eventProcessors.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_id: {
        value: cdktf.stringToHclTerraform(this._appId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_collection: {
        value: cdktf.stringToHclTerraform(this._configCollection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_database: {
        value: cdktf.stringToHclTerraform(this._configDatabase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_full_document: {
        value: cdktf.booleanToHclTerraform(this._configFullDocument),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      config_full_document_before: {
        value: cdktf.booleanToHclTerraform(this._configFullDocumentBefore),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      config_match: {
        value: cdktf.stringToHclTerraform(this._configMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_operation_type: {
        value: cdktf.stringToHclTerraform(this._configOperationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_operation_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._configOperationTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      config_project: {
        value: cdktf.stringToHclTerraform(this._configProject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_providers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._configProviders),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      config_schedule: {
        value: cdktf.stringToHclTerraform(this._configSchedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_service_id: {
        value: cdktf.stringToHclTerraform(this._configServiceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      function_id: {
        value: cdktf.stringToHclTerraform(this._functionId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unordered: {
        value: cdktf.booleanToHclTerraform(this._unordered),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      event_processors: {
        value: eventTriggerEventProcessorsToHclTerraform(this._eventProcessors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventTriggerEventProcessorsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
