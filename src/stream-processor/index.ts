// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.24.0/docs/resources/stream_processor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StreamProcessorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Human-readable label that identifies the stream instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.24.0/docs/resources/stream_processor#instance_name StreamProcessor#instance_name}
  */
  readonly instanceName: string;
  /**
  * Optional configuration for the stream processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.24.0/docs/resources/stream_processor#options StreamProcessor#options}
  */
  readonly options?: StreamProcessorOptions;
  /**
  * Stream aggregation pipeline you want to apply to your streaming data. [MongoDB Atlas Docs](https://www.mongodb.com/docs/atlas/atlas-stream-processing/stream-aggregation/#std-label-stream-aggregation) contain more information. Using [jsonencode](https://developer.hashicorp.com/terraform/language/functions/jsonencode) is recommended when setting this attribute. For more details see the [Aggregation Pipelines Documentation](https://www.mongodb.com/docs/atlas/atlas-stream-processing/stream-aggregation/)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.24.0/docs/resources/stream_processor#pipeline StreamProcessor#pipeline}
  */
  readonly pipeline: string;
  /**
  * Human-readable label that identifies the stream processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.24.0/docs/resources/stream_processor#processor_name StreamProcessor#processor_name}
  */
  readonly processorName: string;
  /**
  * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.
  * 
  * **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.24.0/docs/resources/stream_processor#project_id StreamProcessor#project_id}
  */
  readonly projectId: string;
  /**
  * The state of the stream processor. Commonly occurring states are 'CREATED', 'STARTED', 'STOPPED' and 'FAILED'. Used to start or stop the Stream Processor. Valid values are `CREATED`, `STARTED` or `STOPPED`. When a Stream Processor is created without specifying the state, it will default to `CREATED` state.
  * 
  * **NOTE** When creating a stream processor, setting the state to STARTED can automatically start the stream processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.24.0/docs/resources/stream_processor#state StreamProcessor#state}
  */
  readonly state?: string;
}
export interface StreamProcessorOptionsDlq {
  /**
  * Name of the collection to use for the DLQ.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.24.0/docs/resources/stream_processor#coll StreamProcessor#coll}
  */
  readonly coll: string;
  /**
  * Name of the connection to write DLQ messages to. Must be an Atlas connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.24.0/docs/resources/stream_processor#connection_name StreamProcessor#connection_name}
  */
  readonly connectionName: string;
  /**
  * Name of the database to use for the DLQ.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.24.0/docs/resources/stream_processor#db StreamProcessor#db}
  */
  readonly db: string;
}

export function streamProcessorOptionsDlqToTerraform(struct?: StreamProcessorOptionsDlq | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    coll: cdktf.stringToTerraform(struct!.coll),
    connection_name: cdktf.stringToTerraform(struct!.connectionName),
    db: cdktf.stringToTerraform(struct!.db),
  }
}


export function streamProcessorOptionsDlqToHclTerraform(struct?: StreamProcessorOptionsDlq | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    coll: {
      value: cdktf.stringToHclTerraform(struct!.coll),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_name: {
      value: cdktf.stringToHclTerraform(struct!.connectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db: {
      value: cdktf.stringToHclTerraform(struct!.db),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StreamProcessorOptionsDlqOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StreamProcessorOptionsDlq | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coll !== undefined) {
      hasAnyValues = true;
      internalValueResult.coll = this._coll;
    }
    if (this._connectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionName = this._connectionName;
    }
    if (this._db !== undefined) {
      hasAnyValues = true;
      internalValueResult.db = this._db;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StreamProcessorOptionsDlq | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._coll = undefined;
      this._connectionName = undefined;
      this._db = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._coll = value.coll;
      this._connectionName = value.connectionName;
      this._db = value.db;
    }
  }

  // coll - computed: false, optional: false, required: true
  private _coll?: string; 
  public get coll() {
    return this.getStringAttribute('coll');
  }
  public set coll(value: string) {
    this._coll = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collInput() {
    return this._coll;
  }

  // connection_name - computed: false, optional: false, required: true
  private _connectionName?: string; 
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }
  public set connectionName(value: string) {
    this._connectionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNameInput() {
    return this._connectionName;
  }

  // db - computed: false, optional: false, required: true
  private _db?: string; 
  public get db() {
    return this.getStringAttribute('db');
  }
  public set db(value: string) {
    this._db = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInput() {
    return this._db;
  }
}
export interface StreamProcessorOptions {
  /**
  * Dead letter queue for the stream processor. Refer to the [MongoDB Atlas Docs](https://www.mongodb.com/docs/atlas/reference/glossary/#std-term-dead-letter-queue) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.24.0/docs/resources/stream_processor#dlq StreamProcessor#dlq}
  */
  readonly dlq: StreamProcessorOptionsDlq;
}

export function streamProcessorOptionsToTerraform(struct?: StreamProcessorOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dlq: streamProcessorOptionsDlqToTerraform(struct!.dlq),
  }
}


export function streamProcessorOptionsToHclTerraform(struct?: StreamProcessorOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dlq: {
      value: streamProcessorOptionsDlqToHclTerraform(struct!.dlq),
      isBlock: true,
      type: "struct",
      storageClassType: "StreamProcessorOptionsDlq",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StreamProcessorOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StreamProcessorOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dlq?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dlq = this._dlq?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StreamProcessorOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dlq.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dlq.internalValue = value.dlq;
    }
  }

  // dlq - computed: false, optional: false, required: true
  private _dlq = new StreamProcessorOptionsDlqOutputReference(this, "dlq");
  public get dlq() {
    return this._dlq;
  }
  public putDlq(value: StreamProcessorOptionsDlq) {
    this._dlq.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dlqInput() {
    return this._dlq.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.24.0/docs/resources/stream_processor mongodbatlas_stream_processor}
*/
export class StreamProcessor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_stream_processor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StreamProcessor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StreamProcessor to import
  * @param importFromId The id of the existing StreamProcessor that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.24.0/docs/resources/stream_processor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StreamProcessor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_stream_processor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.24.0/docs/resources/stream_processor mongodbatlas_stream_processor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StreamProcessorConfig
  */
  public constructor(scope: Construct, id: string, config: StreamProcessorConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_stream_processor',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.24.0',
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
    this._instanceName = config.instanceName;
    this._options.internalValue = config.options;
    this._pipeline = config.pipeline;
    this._processorName = config.processorName;
    this._projectId = config.projectId;
    this._state = config.state;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_name - computed: false, optional: false, required: true
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // options - computed: false, optional: true, required: false
  private _options = new StreamProcessorOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: StreamProcessorOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // pipeline - computed: false, optional: false, required: true
  private _pipeline?: string; 
  public get pipeline() {
    return this.getStringAttribute('pipeline');
  }
  public set pipeline(value: string) {
    this._pipeline = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineInput() {
    return this._pipeline;
  }

  // processor_name - computed: false, optional: false, required: true
  private _processorName?: string; 
  public get processorName() {
    return this.getStringAttribute('processor_name');
  }
  public set processorName(value: string) {
    this._processorName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processorNameInput() {
    return this._processorName;
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

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // stats - computed: true, optional: false, required: false
  public get stats() {
    return this.getStringAttribute('stats');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      instance_name: cdktf.stringToTerraform(this._instanceName),
      options: streamProcessorOptionsToTerraform(this._options.internalValue),
      pipeline: cdktf.stringToTerraform(this._pipeline),
      processor_name: cdktf.stringToTerraform(this._processorName),
      project_id: cdktf.stringToTerraform(this._projectId),
      state: cdktf.stringToTerraform(this._state),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      options: {
        value: streamProcessorOptionsToHclTerraform(this._options.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StreamProcessorOptions",
      },
      pipeline: {
        value: cdktf.stringToHclTerraform(this._pipeline),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      processor_name: {
        value: cdktf.stringToHclTerraform(this._processorName),
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
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
