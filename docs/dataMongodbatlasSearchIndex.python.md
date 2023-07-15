# `data_mongodbatlas_search_index`

Refer to the Terraform Registory for docs: [`data_mongodbatlas_search_index`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/search_index).

# `dataMongodbatlasSearchIndex` Submodule <a name="`dataMongodbatlasSearchIndex` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasSearchIndex <a name="DataMongodbatlasSearchIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/search_index mongodbatlas_search_index}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_search_index

dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_name: str,
  index_id: str,
  project_id: str,
  analyzer: str = None,
  analyzers: str = None,
  collection_name: str = None,
  database: str = None,
  id: str = None,
  mappings_dynamic: typing.Union[bool, IResolvable] = None,
  mappings_fields: str = None,
  name: str = None,
  search_analyzer: str = None,
  status: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.Initializer.parameter.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/search_index#cluster_name DataMongodbatlasSearchIndex#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.Initializer.parameter.indexId">index_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/search_index#index_id DataMongodbatlasSearchIndex#index_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/search_index#project_id DataMongodbatlasSearchIndex#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.Initializer.parameter.analyzer">analyzer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/search_index#analyzer DataMongodbatlasSearchIndex#analyzer}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.Initializer.parameter.analyzers">analyzers</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/search_index#analyzers DataMongodbatlasSearchIndex#analyzers}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.Initializer.parameter.collectionName">collection_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/search_index#collection_name DataMongodbatlasSearchIndex#collection_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.Initializer.parameter.database">database</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/search_index#database DataMongodbatlasSearchIndex#database}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/search_index#id DataMongodbatlasSearchIndex#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.Initializer.parameter.mappingsDynamic">mappings_dynamic</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/search_index#mappings_dynamic DataMongodbatlasSearchIndex#mappings_dynamic}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.Initializer.parameter.mappingsFields">mappings_fields</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/search_index#mappings_fields DataMongodbatlasSearchIndex#mappings_fields}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/search_index#name DataMongodbatlasSearchIndex#name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.Initializer.parameter.searchAnalyzer">search_analyzer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/search_index#search_analyzer DataMongodbatlasSearchIndex#search_analyzer}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/search_index#status DataMongodbatlasSearchIndex#status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.Initializer.parameter.clusterName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/search_index#cluster_name DataMongodbatlasSearchIndex#cluster_name}.

---

##### `index_id`<sup>Required</sup> <a name="index_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.Initializer.parameter.indexId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/search_index#index_id DataMongodbatlasSearchIndex#index_id}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/search_index#project_id DataMongodbatlasSearchIndex#project_id}.

---

##### `analyzer`<sup>Optional</sup> <a name="analyzer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.Initializer.parameter.analyzer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/search_index#analyzer DataMongodbatlasSearchIndex#analyzer}.

---

##### `analyzers`<sup>Optional</sup> <a name="analyzers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.Initializer.parameter.analyzers"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/search_index#analyzers DataMongodbatlasSearchIndex#analyzers}.

---

##### `collection_name`<sup>Optional</sup> <a name="collection_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.Initializer.parameter.collectionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/search_index#collection_name DataMongodbatlasSearchIndex#collection_name}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.Initializer.parameter.database"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/search_index#database DataMongodbatlasSearchIndex#database}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/search_index#id DataMongodbatlasSearchIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mappings_dynamic`<sup>Optional</sup> <a name="mappings_dynamic" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.Initializer.parameter.mappingsDynamic"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/search_index#mappings_dynamic DataMongodbatlasSearchIndex#mappings_dynamic}.

---

##### `mappings_fields`<sup>Optional</sup> <a name="mappings_fields" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.Initializer.parameter.mappingsFields"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/search_index#mappings_fields DataMongodbatlasSearchIndex#mappings_fields}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/search_index#name DataMongodbatlasSearchIndex#name}.

---

##### `search_analyzer`<sup>Optional</sup> <a name="search_analyzer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.Initializer.parameter.searchAnalyzer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/search_index#search_analyzer DataMongodbatlasSearchIndex#search_analyzer}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/search_index#status DataMongodbatlasSearchIndex#status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.resetAnalyzer">reset_analyzer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.resetAnalyzers">reset_analyzers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.resetCollectionName">reset_collection_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.resetDatabase">reset_database</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.resetMappingsDynamic">reset_mappings_dynamic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.resetMappingsFields">reset_mappings_fields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.resetSearchAnalyzer">reset_search_analyzer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.resetStatus">reset_status</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_analyzer` <a name="reset_analyzer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.resetAnalyzer"></a>

```python
def reset_analyzer() -> None
```

##### `reset_analyzers` <a name="reset_analyzers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.resetAnalyzers"></a>

```python
def reset_analyzers() -> None
```

##### `reset_collection_name` <a name="reset_collection_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.resetCollectionName"></a>

```python
def reset_collection_name() -> None
```

##### `reset_database` <a name="reset_database" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.resetDatabase"></a>

```python
def reset_database() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_mappings_dynamic` <a name="reset_mappings_dynamic" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.resetMappingsDynamic"></a>

```python
def reset_mappings_dynamic() -> None
```

##### `reset_mappings_fields` <a name="reset_mappings_fields" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.resetMappingsFields"></a>

```python
def reset_mappings_fields() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_search_analyzer` <a name="reset_search_analyzer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.resetSearchAnalyzer"></a>

```python
def reset_search_analyzer() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.resetStatus"></a>

```python
def reset_status() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.isConstruct"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_search_index

dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_search_index

dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_search_index

dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.synonyms">synonyms</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsList">DataMongodbatlasSearchIndexSynonymsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.analyzerInput">analyzer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.analyzersInput">analyzers_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.clusterNameInput">cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.collectionNameInput">collection_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.indexIdInput">index_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.mappingsDynamicInput">mappings_dynamic_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.mappingsFieldsInput">mappings_fields_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.searchAnalyzerInput">search_analyzer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.analyzer">analyzer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.analyzers">analyzers</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.collectionName">collection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.indexId">index_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.mappingsDynamic">mappings_dynamic</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.mappingsFields">mappings_fields</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.searchAnalyzer">search_analyzer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `synonyms`<sup>Required</sup> <a name="synonyms" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.synonyms"></a>

```python
synonyms: DataMongodbatlasSearchIndexSynonymsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsList">DataMongodbatlasSearchIndexSynonymsList</a>

---

##### `analyzer_input`<sup>Optional</sup> <a name="analyzer_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.analyzerInput"></a>

```python
analyzer_input: str
```

- *Type:* str

---

##### `analyzers_input`<sup>Optional</sup> <a name="analyzers_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.analyzersInput"></a>

```python
analyzers_input: str
```

- *Type:* str

---

##### `cluster_name_input`<sup>Optional</sup> <a name="cluster_name_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.clusterNameInput"></a>

```python
cluster_name_input: str
```

- *Type:* str

---

##### `collection_name_input`<sup>Optional</sup> <a name="collection_name_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.collectionNameInput"></a>

```python
collection_name_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `index_id_input`<sup>Optional</sup> <a name="index_id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.indexIdInput"></a>

```python
index_id_input: str
```

- *Type:* str

---

##### `mappings_dynamic_input`<sup>Optional</sup> <a name="mappings_dynamic_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.mappingsDynamicInput"></a>

```python
mappings_dynamic_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mappings_fields_input`<sup>Optional</sup> <a name="mappings_fields_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.mappingsFieldsInput"></a>

```python
mappings_fields_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `search_analyzer_input`<sup>Optional</sup> <a name="search_analyzer_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.searchAnalyzerInput"></a>

```python
search_analyzer_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `analyzer`<sup>Required</sup> <a name="analyzer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.analyzer"></a>

```python
analyzer: str
```

- *Type:* str

---

##### `analyzers`<sup>Required</sup> <a name="analyzers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.analyzers"></a>

```python
analyzers: str
```

- *Type:* str

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `collection_name`<sup>Required</sup> <a name="collection_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.collectionName"></a>

```python
collection_name: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `index_id`<sup>Required</sup> <a name="index_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.indexId"></a>

```python
index_id: str
```

- *Type:* str

---

##### `mappings_dynamic`<sup>Required</sup> <a name="mappings_dynamic" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.mappingsDynamic"></a>

```python
mappings_dynamic: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mappings_fields`<sup>Required</sup> <a name="mappings_fields" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.mappingsFields"></a>

```python
mappings_fields: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `search_analyzer`<sup>Required</sup> <a name="search_analyzer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.searchAnalyzer"></a>

```python
search_analyzer: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndex.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasSearchIndexConfig <a name="DataMongodbatlasSearchIndexConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_search_index

dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_name: str,
  index_id: str,
  project_id: str,
  analyzer: str = None,
  analyzers: str = None,
  collection_name: str = None,
  database: str = None,
  id: str = None,
  mappings_dynamic: typing.Union[bool, IResolvable] = None,
  mappings_fields: str = None,
  name: str = None,
  search_analyzer: str = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/search_index#cluster_name DataMongodbatlasSearchIndex#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.indexId">index_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/search_index#index_id DataMongodbatlasSearchIndex#index_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/search_index#project_id DataMongodbatlasSearchIndex#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.analyzer">analyzer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/search_index#analyzer DataMongodbatlasSearchIndex#analyzer}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.analyzers">analyzers</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/search_index#analyzers DataMongodbatlasSearchIndex#analyzers}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.collectionName">collection_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/search_index#collection_name DataMongodbatlasSearchIndex#collection_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.database">database</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/search_index#database DataMongodbatlasSearchIndex#database}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/search_index#id DataMongodbatlasSearchIndex#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.mappingsDynamic">mappings_dynamic</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/search_index#mappings_dynamic DataMongodbatlasSearchIndex#mappings_dynamic}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.mappingsFields">mappings_fields</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/search_index#mappings_fields DataMongodbatlasSearchIndex#mappings_fields}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/search_index#name DataMongodbatlasSearchIndex#name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.searchAnalyzer">search_analyzer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/search_index#search_analyzer DataMongodbatlasSearchIndex#search_analyzer}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/search_index#status DataMongodbatlasSearchIndex#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/search_index#cluster_name DataMongodbatlasSearchIndex#cluster_name}.

---

##### `index_id`<sup>Required</sup> <a name="index_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.indexId"></a>

```python
index_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/search_index#index_id DataMongodbatlasSearchIndex#index_id}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/search_index#project_id DataMongodbatlasSearchIndex#project_id}.

---

##### `analyzer`<sup>Optional</sup> <a name="analyzer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.analyzer"></a>

```python
analyzer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/search_index#analyzer DataMongodbatlasSearchIndex#analyzer}.

---

##### `analyzers`<sup>Optional</sup> <a name="analyzers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.analyzers"></a>

```python
analyzers: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/search_index#analyzers DataMongodbatlasSearchIndex#analyzers}.

---

##### `collection_name`<sup>Optional</sup> <a name="collection_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.collectionName"></a>

```python
collection_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/search_index#collection_name DataMongodbatlasSearchIndex#collection_name}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.database"></a>

```python
database: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/search_index#database DataMongodbatlasSearchIndex#database}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/search_index#id DataMongodbatlasSearchIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mappings_dynamic`<sup>Optional</sup> <a name="mappings_dynamic" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.mappingsDynamic"></a>

```python
mappings_dynamic: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/search_index#mappings_dynamic DataMongodbatlasSearchIndex#mappings_dynamic}.

---

##### `mappings_fields`<sup>Optional</sup> <a name="mappings_fields" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.mappingsFields"></a>

```python
mappings_fields: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/search_index#mappings_fields DataMongodbatlasSearchIndex#mappings_fields}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/search_index#name DataMongodbatlasSearchIndex#name}.

---

##### `search_analyzer`<sup>Optional</sup> <a name="search_analyzer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.searchAnalyzer"></a>

```python
search_analyzer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/search_index#search_analyzer DataMongodbatlasSearchIndex#search_analyzer}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/search_index#status DataMongodbatlasSearchIndex#status}.

---

### DataMongodbatlasSearchIndexSynonyms <a name="DataMongodbatlasSearchIndexSynonyms" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonyms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonyms.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_search_index

dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonyms()
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasSearchIndexSynonymsList <a name="DataMongodbatlasSearchIndexSynonymsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_search_index

dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasSearchIndexSynonymsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasSearchIndexSynonymsOutputReference <a name="DataMongodbatlasSearchIndexSynonymsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_search_index

dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.property.analyzer">analyzer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.property.sourceCollection">source_collection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonyms">DataMongodbatlasSearchIndexSynonyms</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `analyzer`<sup>Required</sup> <a name="analyzer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.property.analyzer"></a>

```python
analyzer: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `source_collection`<sup>Required</sup> <a name="source_collection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.property.sourceCollection"></a>

```python
source_collection: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonymsOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasSearchIndexSynonyms
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasSearchIndex.DataMongodbatlasSearchIndexSynonyms">DataMongodbatlasSearchIndexSynonyms</a>

---



