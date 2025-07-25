/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.39.0/docs/data-sources/stream_processor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMongodbatlasStreamProcessorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Human-readable label that identifies the stream instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.39.0/docs/data-sources/stream_processor#instance_name DataMongodbatlasStreamProcessor#instance_name}
  */
  readonly instanceName: string;
  /**
  * Human-readable label that identifies the stream processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.39.0/docs/data-sources/stream_processor#processor_name DataMongodbatlasStreamProcessor#processor_name}
  */
  readonly processorName: string;
  /**
  * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.
  * 
  * **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.39.0/docs/data-sources/stream_processor#project_id DataMongodbatlasStreamProcessor#project_id}
  */
  readonly projectId: string;
}
export interface DataMongodbatlasStreamProcessorOptionsDlq {
}

export function dataMongodbatlasStreamProcessorOptionsDlqToTerraform(struct?: DataMongodbatlasStreamProcessorOptionsDlq): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasStreamProcessorOptionsDlqToHclTerraform(struct?: DataMongodbatlasStreamProcessorOptionsDlq): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasStreamProcessorOptionsDlqOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMongodbatlasStreamProcessorOptionsDlq | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasStreamProcessorOptionsDlq | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // coll - computed: true, optional: false, required: false
  public get coll() {
    return this.getStringAttribute('coll');
  }

  // connection_name - computed: true, optional: false, required: false
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }

  // db - computed: true, optional: false, required: false
  public get db() {
    return this.getStringAttribute('db');
  }
}
export interface DataMongodbatlasStreamProcessorOptions {
}

export function dataMongodbatlasStreamProcessorOptionsToTerraform(struct?: DataMongodbatlasStreamProcessorOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasStreamProcessorOptionsToHclTerraform(struct?: DataMongodbatlasStreamProcessorOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasStreamProcessorOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMongodbatlasStreamProcessorOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasStreamProcessorOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dlq - computed: true, optional: false, required: false
  private _dlq = new DataMongodbatlasStreamProcessorOptionsDlqOutputReference(this, "dlq");
  public get dlq() {
    return this._dlq;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.39.0/docs/data-sources/stream_processor mongodbatlas_stream_processor}
*/
export class DataMongodbatlasStreamProcessor extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_stream_processor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMongodbatlasStreamProcessor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMongodbatlasStreamProcessor to import
  * @param importFromId The id of the existing DataMongodbatlasStreamProcessor that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.39.0/docs/data-sources/stream_processor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMongodbatlasStreamProcessor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_stream_processor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.39.0/docs/data-sources/stream_processor mongodbatlas_stream_processor} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMongodbatlasStreamProcessorConfig
  */
  public constructor(scope: Construct, id: string, config: DataMongodbatlasStreamProcessorConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_stream_processor',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.39.0',
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
    this._processorName = config.processorName;
    this._projectId = config.projectId;
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

  // options - computed: true, optional: false, required: false
  private _options = new DataMongodbatlasStreamProcessorOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }

  // pipeline - computed: true, optional: false, required: false
  public get pipeline() {
    return this.getStringAttribute('pipeline');
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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
      processor_name: cdktf.stringToTerraform(this._processorName),
      project_id: cdktf.stringToTerraform(this._projectId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
