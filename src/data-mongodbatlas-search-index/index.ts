// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/data-sources/search_index
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMongodbatlasSearchIndexConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/data-sources/search_index#analyzer DataMongodbatlasSearchIndex#analyzer}
  */
  readonly analyzer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/data-sources/search_index#analyzers DataMongodbatlasSearchIndex#analyzers}
  */
  readonly analyzers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/data-sources/search_index#cluster_name DataMongodbatlasSearchIndex#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/data-sources/search_index#collection_name DataMongodbatlasSearchIndex#collection_name}
  */
  readonly collectionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/data-sources/search_index#database DataMongodbatlasSearchIndex#database}
  */
  readonly database?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/data-sources/search_index#fields DataMongodbatlasSearchIndex#fields}
  */
  readonly fields?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/data-sources/search_index#id DataMongodbatlasSearchIndex#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/data-sources/search_index#index_id DataMongodbatlasSearchIndex#index_id}
  */
  readonly indexId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/data-sources/search_index#mappings_dynamic DataMongodbatlasSearchIndex#mappings_dynamic}
  */
  readonly mappingsDynamic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/data-sources/search_index#mappings_fields DataMongodbatlasSearchIndex#mappings_fields}
  */
  readonly mappingsFields?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/data-sources/search_index#name DataMongodbatlasSearchIndex#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/data-sources/search_index#project_id DataMongodbatlasSearchIndex#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/data-sources/search_index#search_analyzer DataMongodbatlasSearchIndex#search_analyzer}
  */
  readonly searchAnalyzer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/data-sources/search_index#type DataMongodbatlasSearchIndex#type}
  */
  readonly type?: string;
}
export interface DataMongodbatlasSearchIndexSynonyms {
}

export function dataMongodbatlasSearchIndexSynonymsToTerraform(struct?: DataMongodbatlasSearchIndexSynonyms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasSearchIndexSynonymsToHclTerraform(struct?: DataMongodbatlasSearchIndexSynonyms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasSearchIndexSynonymsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasSearchIndexSynonyms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasSearchIndexSynonyms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // analyzer - computed: true, optional: false, required: false
  public get analyzer() {
    return this.getStringAttribute('analyzer');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // source_collection - computed: true, optional: false, required: false
  public get sourceCollection() {
    return this.getStringAttribute('source_collection');
  }
}

export class DataMongodbatlasSearchIndexSynonymsList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasSearchIndexSynonymsOutputReference {
    return new DataMongodbatlasSearchIndexSynonymsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/data-sources/search_index mongodbatlas_search_index}
*/
export class DataMongodbatlasSearchIndex extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_search_index";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMongodbatlasSearchIndex resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMongodbatlasSearchIndex to import
  * @param importFromId The id of the existing DataMongodbatlasSearchIndex that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/data-sources/search_index#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMongodbatlasSearchIndex to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_search_index", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/data-sources/search_index mongodbatlas_search_index} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMongodbatlasSearchIndexConfig
  */
  public constructor(scope: Construct, id: string, config: DataMongodbatlasSearchIndexConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_search_index',
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
    this._analyzer = config.analyzer;
    this._analyzers = config.analyzers;
    this._clusterName = config.clusterName;
    this._collectionName = config.collectionName;
    this._database = config.database;
    this._fields = config.fields;
    this._id = config.id;
    this._indexId = config.indexId;
    this._mappingsDynamic = config.mappingsDynamic;
    this._mappingsFields = config.mappingsFields;
    this._name = config.name;
    this._projectId = config.projectId;
    this._searchAnalyzer = config.searchAnalyzer;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // analyzer - computed: false, optional: true, required: false
  private _analyzer?: string; 
  public get analyzer() {
    return this.getStringAttribute('analyzer');
  }
  public set analyzer(value: string) {
    this._analyzer = value;
  }
  public resetAnalyzer() {
    this._analyzer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyzerInput() {
    return this._analyzer;
  }

  // analyzers - computed: false, optional: true, required: false
  private _analyzers?: string; 
  public get analyzers() {
    return this.getStringAttribute('analyzers');
  }
  public set analyzers(value: string) {
    this._analyzers = value;
  }
  public resetAnalyzers() {
    this._analyzers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyzersInput() {
    return this._analyzers;
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

  // collection_name - computed: false, optional: true, required: false
  private _collectionName?: string; 
  public get collectionName() {
    return this.getStringAttribute('collection_name');
  }
  public set collectionName(value: string) {
    this._collectionName = value;
  }
  public resetCollectionName() {
    this._collectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionNameInput() {
    return this._collectionName;
  }

  // database - computed: false, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // fields - computed: false, optional: true, required: false
  private _fields?: string; 
  public get fields() {
    return this.getStringAttribute('fields');
  }
  public set fields(value: string) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
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

  // index_id - computed: false, optional: false, required: true
  private _indexId?: string; 
  public get indexId() {
    return this.getStringAttribute('index_id');
  }
  public set indexId(value: string) {
    this._indexId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexIdInput() {
    return this._indexId;
  }

  // mappings_dynamic - computed: false, optional: true, required: false
  private _mappingsDynamic?: boolean | cdktf.IResolvable; 
  public get mappingsDynamic() {
    return this.getBooleanAttribute('mappings_dynamic');
  }
  public set mappingsDynamic(value: boolean | cdktf.IResolvable) {
    this._mappingsDynamic = value;
  }
  public resetMappingsDynamic() {
    this._mappingsDynamic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingsDynamicInput() {
    return this._mappingsDynamic;
  }

  // mappings_fields - computed: false, optional: true, required: false
  private _mappingsFields?: string; 
  public get mappingsFields() {
    return this.getStringAttribute('mappings_fields');
  }
  public set mappingsFields(value: string) {
    this._mappingsFields = value;
  }
  public resetMappingsFields() {
    this._mappingsFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingsFieldsInput() {
    return this._mappingsFields;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
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

  // search_analyzer - computed: false, optional: true, required: false
  private _searchAnalyzer?: string; 
  public get searchAnalyzer() {
    return this.getStringAttribute('search_analyzer');
  }
  public set searchAnalyzer(value: string) {
    this._searchAnalyzer = value;
  }
  public resetSearchAnalyzer() {
    this._searchAnalyzer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchAnalyzerInput() {
    return this._searchAnalyzer;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // synonyms - computed: true, optional: false, required: false
  private _synonyms = new DataMongodbatlasSearchIndexSynonymsList(this, "synonyms", true);
  public get synonyms() {
    return this._synonyms;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      analyzer: cdktf.stringToTerraform(this._analyzer),
      analyzers: cdktf.stringToTerraform(this._analyzers),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      collection_name: cdktf.stringToTerraform(this._collectionName),
      database: cdktf.stringToTerraform(this._database),
      fields: cdktf.stringToTerraform(this._fields),
      id: cdktf.stringToTerraform(this._id),
      index_id: cdktf.stringToTerraform(this._indexId),
      mappings_dynamic: cdktf.booleanToTerraform(this._mappingsDynamic),
      mappings_fields: cdktf.stringToTerraform(this._mappingsFields),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      search_analyzer: cdktf.stringToTerraform(this._searchAnalyzer),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      analyzer: {
        value: cdktf.stringToHclTerraform(this._analyzer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      analyzers: {
        value: cdktf.stringToHclTerraform(this._analyzers),
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
      collection_name: {
        value: cdktf.stringToHclTerraform(this._collectionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database: {
        value: cdktf.stringToHclTerraform(this._database),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fields: {
        value: cdktf.stringToHclTerraform(this._fields),
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
      index_id: {
        value: cdktf.stringToHclTerraform(this._indexId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mappings_dynamic: {
        value: cdktf.booleanToHclTerraform(this._mappingsDynamic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mappings_fields: {
        value: cdktf.stringToHclTerraform(this._mappingsFields),
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
      search_analyzer: {
        value: cdktf.stringToHclTerraform(this._searchAnalyzer),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
