// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/data-sources/data_lake_pipeline_run
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMongodbatlasDataLakePipelineRunConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/data-sources/data_lake_pipeline_run#pipeline_name DataMongodbatlasDataLakePipelineRun#pipeline_name}
  */
  readonly pipelineName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/data-sources/data_lake_pipeline_run#pipeline_run_id DataMongodbatlasDataLakePipelineRun#pipeline_run_id}
  */
  readonly pipelineRunId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/data-sources/data_lake_pipeline_run#project_id DataMongodbatlasDataLakePipelineRun#project_id}
  */
  readonly projectId: string;
}
export interface DataMongodbatlasDataLakePipelineRunStats {
}

export function dataMongodbatlasDataLakePipelineRunStatsToTerraform(struct?: DataMongodbatlasDataLakePipelineRunStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasDataLakePipelineRunStatsToHclTerraform(struct?: DataMongodbatlasDataLakePipelineRunStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasDataLakePipelineRunStatsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasDataLakePipelineRunStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasDataLakePipelineRunStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bytes_exported - computed: true, optional: false, required: false
  public get bytesExported() {
    return this.getNumberAttribute('bytes_exported');
  }

  // num_docs - computed: true, optional: false, required: false
  public get numDocs() {
    return this.getNumberAttribute('num_docs');
  }
}

export class DataMongodbatlasDataLakePipelineRunStatsList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasDataLakePipelineRunStatsOutputReference {
    return new DataMongodbatlasDataLakePipelineRunStatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/data-sources/data_lake_pipeline_run mongodbatlas_data_lake_pipeline_run}
*/
export class DataMongodbatlasDataLakePipelineRun extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_data_lake_pipeline_run";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMongodbatlasDataLakePipelineRun resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMongodbatlasDataLakePipelineRun to import
  * @param importFromId The id of the existing DataMongodbatlasDataLakePipelineRun that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/data-sources/data_lake_pipeline_run#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMongodbatlasDataLakePipelineRun to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_data_lake_pipeline_run", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/data-sources/data_lake_pipeline_run mongodbatlas_data_lake_pipeline_run} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMongodbatlasDataLakePipelineRunConfig
  */
  public constructor(scope: Construct, id: string, config: DataMongodbatlasDataLakePipelineRunConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_data_lake_pipeline_run',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.16.2',
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
    this._pipelineName = config.pipelineName;
    this._pipelineRunId = config.pipelineRunId;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_frequency_type - computed: true, optional: false, required: false
  public get backupFrequencyType() {
    return this.getStringAttribute('backup_frequency_type');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // dataset_name - computed: true, optional: false, required: false
  public get datasetName() {
    return this.getStringAttribute('dataset_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated_date - computed: true, optional: false, required: false
  public get lastUpdatedDate() {
    return this.getStringAttribute('last_updated_date');
  }

  // phase - computed: true, optional: false, required: false
  public get phase() {
    return this.getStringAttribute('phase');
  }

  // pipeline_id - computed: true, optional: false, required: false
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }

  // pipeline_name - computed: false, optional: false, required: true
  private _pipelineName?: string; 
  public get pipelineName() {
    return this.getStringAttribute('pipeline_name');
  }
  public set pipelineName(value: string) {
    this._pipelineName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineNameInput() {
    return this._pipelineName;
  }

  // pipeline_run_id - computed: false, optional: false, required: true
  private _pipelineRunId?: string; 
  public get pipelineRunId() {
    return this.getStringAttribute('pipeline_run_id');
  }
  public set pipelineRunId(value: string) {
    this._pipelineRunId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineRunIdInput() {
    return this._pipelineRunId;
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

  // snapshot_id - computed: true, optional: false, required: false
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // stats - computed: true, optional: false, required: false
  private _stats = new DataMongodbatlasDataLakePipelineRunStatsList(this, "stats", false);
  public get stats() {
    return this._stats;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      pipeline_name: cdktf.stringToTerraform(this._pipelineName),
      pipeline_run_id: cdktf.stringToTerraform(this._pipelineRunId),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      pipeline_name: {
        value: cdktf.stringToHclTerraform(this._pipelineName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pipeline_run_id: {
        value: cdktf.stringToHclTerraform(this._pipelineRunId),
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
