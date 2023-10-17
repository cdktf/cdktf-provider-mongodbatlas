/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/search_index
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SearchIndexConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/search_index#analyzer SearchIndex#analyzer}
  */
  readonly analyzer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/search_index#analyzers SearchIndex#analyzers}
  */
  readonly analyzers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/search_index#cluster_name SearchIndex#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/search_index#collection_name SearchIndex#collection_name}
  */
  readonly collectionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/search_index#database SearchIndex#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/search_index#id SearchIndex#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/search_index#mappings_dynamic SearchIndex#mappings_dynamic}
  */
  readonly mappingsDynamic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/search_index#mappings_fields SearchIndex#mappings_fields}
  */
  readonly mappingsFields?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/search_index#name SearchIndex#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/search_index#project_id SearchIndex#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/search_index#search_analyzer SearchIndex#search_analyzer}
  */
  readonly searchAnalyzer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/search_index#status SearchIndex#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/search_index#wait_for_index_build_completion SearchIndex#wait_for_index_build_completion}
  */
  readonly waitForIndexBuildCompletion?: boolean | cdktf.IResolvable;
  /**
  * synonyms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/search_index#synonyms SearchIndex#synonyms}
  */
  readonly synonyms?: SearchIndexSynonyms[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/search_index#timeouts SearchIndex#timeouts}
  */
  readonly timeouts?: SearchIndexTimeouts;
}
export interface SearchIndexSynonyms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/search_index#analyzer SearchIndex#analyzer}
  */
  readonly analyzer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/search_index#name SearchIndex#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/search_index#source_collection SearchIndex#source_collection}
  */
  readonly sourceCollection: string;
}

export function searchIndexSynonymsToTerraform(struct?: SearchIndexSynonyms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    analyzer: cdktf.stringToTerraform(struct!.analyzer),
    name: cdktf.stringToTerraform(struct!.name),
    source_collection: cdktf.stringToTerraform(struct!.sourceCollection),
  }
}

export class SearchIndexSynonymsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SearchIndexSynonyms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analyzer !== undefined) {
      hasAnyValues = true;
      internalValueResult.analyzer = this._analyzer;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sourceCollection !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceCollection = this._sourceCollection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchIndexSynonyms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._analyzer = undefined;
      this._name = undefined;
      this._sourceCollection = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._analyzer = value.analyzer;
      this._name = value.name;
      this._sourceCollection = value.sourceCollection;
    }
  }

  // analyzer - computed: false, optional: false, required: true
  private _analyzer?: string; 
  public get analyzer() {
    return this.getStringAttribute('analyzer');
  }
  public set analyzer(value: string) {
    this._analyzer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get analyzerInput() {
    return this._analyzer;
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

  // source_collection - computed: false, optional: false, required: true
  private _sourceCollection?: string; 
  public get sourceCollection() {
    return this.getStringAttribute('source_collection');
  }
  public set sourceCollection(value: string) {
    this._sourceCollection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCollectionInput() {
    return this._sourceCollection;
  }
}

export class SearchIndexSynonymsList extends cdktf.ComplexList {
  public internalValue? : SearchIndexSynonyms[] | cdktf.IResolvable

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
  public get(index: number): SearchIndexSynonymsOutputReference {
    return new SearchIndexSynonymsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SearchIndexTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/search_index#create SearchIndex#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/search_index#delete SearchIndex#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/search_index#update SearchIndex#update}
  */
  readonly update?: string;
}

export function searchIndexTimeoutsToTerraform(struct?: SearchIndexTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class SearchIndexTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchIndexTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchIndexTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/search_index mongodbatlas_search_index}
*/
export class SearchIndex extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_search_index";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SearchIndex resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SearchIndex to import
  * @param importFromId The id of the existing SearchIndex that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/search_index#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SearchIndex to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_search_index", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.1/docs/resources/search_index mongodbatlas_search_index} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SearchIndexConfig
  */
  public constructor(scope: Construct, id: string, config: SearchIndexConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_search_index',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.12.1',
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
    this._id = config.id;
    this._mappingsDynamic = config.mappingsDynamic;
    this._mappingsFields = config.mappingsFields;
    this._name = config.name;
    this._projectId = config.projectId;
    this._searchAnalyzer = config.searchAnalyzer;
    this._status = config.status;
    this._waitForIndexBuildCompletion = config.waitForIndexBuildCompletion;
    this._synonyms.internalValue = config.synonyms;
    this._timeouts.internalValue = config.timeouts;
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

  // collection_name - computed: false, optional: false, required: true
  private _collectionName?: string; 
  public get collectionName() {
    return this.getStringAttribute('collection_name');
  }
  public set collectionName(value: string) {
    this._collectionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionNameInput() {
    return this._collectionName;
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
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

  // index_id - computed: true, optional: false, required: false
  public get indexId() {
    return this.getStringAttribute('index_id');
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

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // wait_for_index_build_completion - computed: false, optional: true, required: false
  private _waitForIndexBuildCompletion?: boolean | cdktf.IResolvable; 
  public get waitForIndexBuildCompletion() {
    return this.getBooleanAttribute('wait_for_index_build_completion');
  }
  public set waitForIndexBuildCompletion(value: boolean | cdktf.IResolvable) {
    this._waitForIndexBuildCompletion = value;
  }
  public resetWaitForIndexBuildCompletion() {
    this._waitForIndexBuildCompletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForIndexBuildCompletionInput() {
    return this._waitForIndexBuildCompletion;
  }

  // synonyms - computed: false, optional: true, required: false
  private _synonyms = new SearchIndexSynonymsList(this, "synonyms", true);
  public get synonyms() {
    return this._synonyms;
  }
  public putSynonyms(value: SearchIndexSynonyms[] | cdktf.IResolvable) {
    this._synonyms.internalValue = value;
  }
  public resetSynonyms() {
    this._synonyms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synonymsInput() {
    return this._synonyms.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SearchIndexTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SearchIndexTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
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
      id: cdktf.stringToTerraform(this._id),
      mappings_dynamic: cdktf.booleanToTerraform(this._mappingsDynamic),
      mappings_fields: cdktf.stringToTerraform(this._mappingsFields),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      search_analyzer: cdktf.stringToTerraform(this._searchAnalyzer),
      status: cdktf.stringToTerraform(this._status),
      wait_for_index_build_completion: cdktf.booleanToTerraform(this._waitForIndexBuildCompletion),
      synonyms: cdktf.listMapper(searchIndexSynonymsToTerraform, true)(this._synonyms.internalValue),
      timeouts: searchIndexTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
