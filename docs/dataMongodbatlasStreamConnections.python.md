# `dataMongodbatlasStreamConnections` Submodule <a name="`dataMongodbatlasStreamConnections` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasStreamConnections <a name="DataMongodbatlasStreamConnections" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/data-sources/stream_connections mongodbatlas_stream_connections}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_stream_connections

dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_name: str,
  project_id: str,
  items_per_page: typing.Union[int, float] = None,
  page_num: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.Initializer.parameter.instanceName">instance_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/data-sources/stream_connections#instance_name DataMongodbatlasStreamConnections#instance_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/data-sources/stream_connections#project_id DataMongodbatlasStreamConnections#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.Initializer.parameter.itemsPerPage">items_per_page</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/data-sources/stream_connections#items_per_page DataMongodbatlasStreamConnections#items_per_page}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.Initializer.parameter.pageNum">page_num</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/data-sources/stream_connections#page_num DataMongodbatlasStreamConnections#page_num}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.Initializer.parameter.instanceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/data-sources/stream_connections#instance_name DataMongodbatlasStreamConnections#instance_name}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/data-sources/stream_connections#project_id DataMongodbatlasStreamConnections#project_id}.

---

##### `items_per_page`<sup>Optional</sup> <a name="items_per_page" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.Initializer.parameter.itemsPerPage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/data-sources/stream_connections#items_per_page DataMongodbatlasStreamConnections#items_per_page}.

---

##### `page_num`<sup>Optional</sup> <a name="page_num" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.Initializer.parameter.pageNum"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/data-sources/stream_connections#page_num DataMongodbatlasStreamConnections#page_num}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.resetItemsPerPage">reset_items_per_page</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.resetPageNum">reset_page_num</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_items_per_page` <a name="reset_items_per_page" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.resetItemsPerPage"></a>

```python
def reset_items_per_page() -> None
```

##### `reset_page_num` <a name="reset_page_num" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.resetPageNum"></a>

```python
def reset_page_num() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataMongodbatlasStreamConnections resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.isConstruct"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_stream_connections

dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_stream_connections

dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_stream_connections

dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_stream_connections

dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataMongodbatlasStreamConnections resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataMongodbatlasStreamConnections to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataMongodbatlasStreamConnections that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/data-sources/stream_connections#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasStreamConnections to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.results">results</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList">DataMongodbatlasStreamConnectionsResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.totalCount">total_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.instanceNameInput">instance_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.itemsPerPageInput">items_per_page_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.pageNumInput">page_num_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.instanceName">instance_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.itemsPerPage">items_per_page</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.pageNum">page_num</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `results`<sup>Required</sup> <a name="results" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.results"></a>

```python
results: DataMongodbatlasStreamConnectionsResultsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList">DataMongodbatlasStreamConnectionsResultsList</a>

---

##### `total_count`<sup>Required</sup> <a name="total_count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.totalCount"></a>

```python
total_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_name_input`<sup>Optional</sup> <a name="instance_name_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.instanceNameInput"></a>

```python
instance_name_input: str
```

- *Type:* str

---

##### `items_per_page_input`<sup>Optional</sup> <a name="items_per_page_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.itemsPerPageInput"></a>

```python
items_per_page_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `page_num_input`<sup>Optional</sup> <a name="page_num_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.pageNumInput"></a>

```python
page_num_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.instanceName"></a>

```python
instance_name: str
```

- *Type:* str

---

##### `items_per_page`<sup>Required</sup> <a name="items_per_page" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.itemsPerPage"></a>

```python
items_per_page: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `page_num`<sup>Required</sup> <a name="page_num" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.pageNum"></a>

```python
page_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnections.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasStreamConnectionsConfig <a name="DataMongodbatlasStreamConnectionsConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_stream_connections

dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_name: str,
  project_id: str,
  items_per_page: typing.Union[int, float] = None,
  page_num: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsConfig.property.instanceName">instance_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/data-sources/stream_connections#instance_name DataMongodbatlasStreamConnections#instance_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/data-sources/stream_connections#project_id DataMongodbatlasStreamConnections#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsConfig.property.itemsPerPage">items_per_page</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/data-sources/stream_connections#items_per_page DataMongodbatlasStreamConnections#items_per_page}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsConfig.property.pageNum">page_num</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/data-sources/stream_connections#page_num DataMongodbatlasStreamConnections#page_num}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsConfig.property.instanceName"></a>

```python
instance_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/data-sources/stream_connections#instance_name DataMongodbatlasStreamConnections#instance_name}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/data-sources/stream_connections#project_id DataMongodbatlasStreamConnections#project_id}.

---

##### `items_per_page`<sup>Optional</sup> <a name="items_per_page" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsConfig.property.itemsPerPage"></a>

```python
items_per_page: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/data-sources/stream_connections#items_per_page DataMongodbatlasStreamConnections#items_per_page}.

---

##### `page_num`<sup>Optional</sup> <a name="page_num" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsConfig.property.pageNum"></a>

```python
page_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.0/docs/data-sources/stream_connections#page_num DataMongodbatlasStreamConnections#page_num}.

---

### DataMongodbatlasStreamConnectionsResults <a name="DataMongodbatlasStreamConnectionsResults" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResults.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_stream_connections

dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResults()
```


### DataMongodbatlasStreamConnectionsResultsAuthentication <a name="DataMongodbatlasStreamConnectionsResultsAuthentication" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthentication.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_stream_connections

dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthentication()
```


### DataMongodbatlasStreamConnectionsResultsAws <a name="DataMongodbatlasStreamConnectionsResultsAws" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAws"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAws.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_stream_connections

dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAws()
```


### DataMongodbatlasStreamConnectionsResultsDbRoleToExecute <a name="DataMongodbatlasStreamConnectionsResultsDbRoleToExecute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecute.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_stream_connections

dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecute()
```


### DataMongodbatlasStreamConnectionsResultsNetworking <a name="DataMongodbatlasStreamConnectionsResultsNetworking" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworking"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworking.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_stream_connections

dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworking()
```


### DataMongodbatlasStreamConnectionsResultsNetworkingAccess <a name="DataMongodbatlasStreamConnectionsResultsNetworkingAccess" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccess.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_stream_connections

dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccess()
```


### DataMongodbatlasStreamConnectionsResultsSecurity <a name="DataMongodbatlasStreamConnectionsResultsSecurity" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurity.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_stream_connections

dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurity()
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference <a name="DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_stream_connections

dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.property.mechanism">mechanism</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthentication">DataMongodbatlasStreamConnectionsResultsAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mechanism`<sup>Required</sup> <a name="mechanism" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.property.mechanism"></a>

```python
mechanism: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasStreamConnectionsResultsAuthentication
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthentication">DataMongodbatlasStreamConnectionsResultsAuthentication</a>

---


### DataMongodbatlasStreamConnectionsResultsAwsOutputReference <a name="DataMongodbatlasStreamConnectionsResultsAwsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_stream_connections

dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAws">DataMongodbatlasStreamConnectionsResultsAws</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasStreamConnectionsResultsAws
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAws">DataMongodbatlasStreamConnectionsResultsAws</a>

---


### DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference <a name="DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_stream_connections

dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecute">DataMongodbatlasStreamConnectionsResultsDbRoleToExecute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasStreamConnectionsResultsDbRoleToExecute
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecute">DataMongodbatlasStreamConnectionsResultsDbRoleToExecute</a>

---


### DataMongodbatlasStreamConnectionsResultsList <a name="DataMongodbatlasStreamConnectionsResultsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_stream_connections

dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasStreamConnectionsResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference <a name="DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_stream_connections

dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.property.connectionId">connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccess">DataMongodbatlasStreamConnectionsResultsNetworkingAccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasStreamConnectionsResultsNetworkingAccess
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccess">DataMongodbatlasStreamConnectionsResultsNetworkingAccess</a>

---


### DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference <a name="DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_stream_connections

dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.property.access">access</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference">DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworking">DataMongodbatlasStreamConnectionsResultsNetworking</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.property.access"></a>

```python
access: DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference">DataMongodbatlasStreamConnectionsResultsNetworkingAccessOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasStreamConnectionsResultsNetworking
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworking">DataMongodbatlasStreamConnectionsResultsNetworking</a>

---


### DataMongodbatlasStreamConnectionsResultsOutputReference <a name="DataMongodbatlasStreamConnectionsResultsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_stream_connections

dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference">DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.aws">aws</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference">DataMongodbatlasStreamConnectionsResultsAwsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.bootstrapServers">bootstrap_servers</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.config">config</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.connectionName">connection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.dbRoleToExecute">db_role_to_execute</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference">DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.headers">headers</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.instanceName">instance_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.networking">networking</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference">DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.security">security</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference">DataMongodbatlasStreamConnectionsResultsSecurityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResults">DataMongodbatlasStreamConnectionsResults</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.authentication"></a>

```python
authentication: DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference">DataMongodbatlasStreamConnectionsResultsAuthenticationOutputReference</a>

---

##### `aws`<sup>Required</sup> <a name="aws" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.aws"></a>

```python
aws: DataMongodbatlasStreamConnectionsResultsAwsOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsAwsOutputReference">DataMongodbatlasStreamConnectionsResultsAwsOutputReference</a>

---

##### `bootstrap_servers`<sup>Required</sup> <a name="bootstrap_servers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.bootstrapServers"></a>

```python
bootstrap_servers: str
```

- *Type:* str

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.config"></a>

```python
config: StringMap
```

- *Type:* cdktf.StringMap

---

##### `connection_name`<sup>Required</sup> <a name="connection_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

---

##### `db_role_to_execute`<sup>Required</sup> <a name="db_role_to_execute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.dbRoleToExecute"></a>

```python
db_role_to_execute: DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference">DataMongodbatlasStreamConnectionsResultsDbRoleToExecuteOutputReference</a>

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.headers"></a>

```python
headers: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.instanceName"></a>

```python
instance_name: str
```

- *Type:* str

---

##### `networking`<sup>Required</sup> <a name="networking" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.networking"></a>

```python
networking: DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference">DataMongodbatlasStreamConnectionsResultsNetworkingOutputReference</a>

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `security`<sup>Required</sup> <a name="security" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.security"></a>

```python
security: DataMongodbatlasStreamConnectionsResultsSecurityOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference">DataMongodbatlasStreamConnectionsResultsSecurityOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasStreamConnectionsResults
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResults">DataMongodbatlasStreamConnectionsResults</a>

---


### DataMongodbatlasStreamConnectionsResultsSecurityOutputReference <a name="DataMongodbatlasStreamConnectionsResultsSecurityOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_stream_connections

dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.property.brokerPublicCertificate">broker_public_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurity">DataMongodbatlasStreamConnectionsResultsSecurity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `broker_public_certificate`<sup>Required</sup> <a name="broker_public_certificate" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.property.brokerPublicCertificate"></a>

```python
broker_public_certificate: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurityOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasStreamConnectionsResultsSecurity
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasStreamConnections.DataMongodbatlasStreamConnectionsResultsSecurity">DataMongodbatlasStreamConnectionsResultsSecurity</a>

---



