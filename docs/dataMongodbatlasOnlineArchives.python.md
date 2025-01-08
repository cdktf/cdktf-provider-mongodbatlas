# `dataMongodbatlasOnlineArchives` Submodule <a name="`dataMongodbatlasOnlineArchives` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasOnlineArchives <a name="DataMongodbatlasOnlineArchives" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/data-sources/online_archives mongodbatlas_online_archives}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_online_archives

dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives(
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
  project_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.Initializer.parameter.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/data-sources/online_archives#cluster_name DataMongodbatlasOnlineArchives#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/data-sources/online_archives#project_id DataMongodbatlasOnlineArchives#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/data-sources/online_archives#id DataMongodbatlasOnlineArchives#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.Initializer.parameter.clusterName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/data-sources/online_archives#cluster_name DataMongodbatlasOnlineArchives#cluster_name}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/data-sources/online_archives#project_id DataMongodbatlasOnlineArchives#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/data-sources/online_archives#id DataMongodbatlasOnlineArchives#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataMongodbatlasOnlineArchives resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.isConstruct"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_online_archives

dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_online_archives

dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_online_archives

dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_online_archives

dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataMongodbatlasOnlineArchives resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataMongodbatlasOnlineArchives to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataMongodbatlasOnlineArchives that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/data-sources/online_archives#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasOnlineArchives to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.results">results</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsList">DataMongodbatlasOnlineArchivesResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.totalCount">total_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.clusterNameInput">cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `results`<sup>Required</sup> <a name="results" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.results"></a>

```python
results: DataMongodbatlasOnlineArchivesResultsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsList">DataMongodbatlasOnlineArchivesResultsList</a>

---

##### `total_count`<sup>Required</sup> <a name="total_count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.totalCount"></a>

```python
total_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cluster_name_input`<sup>Optional</sup> <a name="cluster_name_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.clusterNameInput"></a>

```python
cluster_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchives.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasOnlineArchivesConfig <a name="DataMongodbatlasOnlineArchivesConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_online_archives

dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_name: str,
  project_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesConfig.property.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/data-sources/online_archives#cluster_name DataMongodbatlasOnlineArchives#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/data-sources/online_archives#project_id DataMongodbatlasOnlineArchives#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/data-sources/online_archives#id DataMongodbatlasOnlineArchives#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesConfig.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/data-sources/online_archives#cluster_name DataMongodbatlasOnlineArchives#cluster_name}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/data-sources/online_archives#project_id DataMongodbatlasOnlineArchives#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/data-sources/online_archives#id DataMongodbatlasOnlineArchives#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataMongodbatlasOnlineArchivesResults <a name="DataMongodbatlasOnlineArchivesResults" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResults.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_online_archives

dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResults()
```


### DataMongodbatlasOnlineArchivesResultsCriteria <a name="DataMongodbatlasOnlineArchivesResultsCriteria" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteria.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_online_archives

dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteria()
```


### DataMongodbatlasOnlineArchivesResultsDataExpirationRule <a name="DataMongodbatlasOnlineArchivesResultsDataExpirationRule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRule.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_online_archives

dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRule()
```


### DataMongodbatlasOnlineArchivesResultsDataProcessRegion <a name="DataMongodbatlasOnlineArchivesResultsDataProcessRegion" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegion.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_online_archives

dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegion()
```


### DataMongodbatlasOnlineArchivesResultsPartitionFields <a name="DataMongodbatlasOnlineArchivesResultsPartitionFields" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFields.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_online_archives

dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFields()
```


### DataMongodbatlasOnlineArchivesResultsSchedule <a name="DataMongodbatlasOnlineArchivesResultsSchedule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_online_archives

dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsSchedule()
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasOnlineArchivesResultsCriteriaList <a name="DataMongodbatlasOnlineArchivesResultsCriteriaList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_online_archives

dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference <a name="DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_online_archives

dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.property.dateField">date_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.property.dateFormat">date_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.property.expireAfterDays">expire_after_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteria">DataMongodbatlasOnlineArchivesResultsCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `date_field`<sup>Required</sup> <a name="date_field" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.property.dateField"></a>

```python
date_field: str
```

- *Type:* str

---

##### `date_format`<sup>Required</sup> <a name="date_format" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.property.dateFormat"></a>

```python
date_format: str
```

- *Type:* str

---

##### `expire_after_days`<sup>Required</sup> <a name="expire_after_days" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.property.expireAfterDays"></a>

```python
expire_after_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasOnlineArchivesResultsCriteria
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteria">DataMongodbatlasOnlineArchivesResultsCriteria</a>

---


### DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList <a name="DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_online_archives

dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference <a name="DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_online_archives

dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.property.expireAfterDays">expire_after_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRule">DataMongodbatlasOnlineArchivesResultsDataExpirationRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expire_after_days`<sup>Required</sup> <a name="expire_after_days" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.property.expireAfterDays"></a>

```python
expire_after_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasOnlineArchivesResultsDataExpirationRule
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRule">DataMongodbatlasOnlineArchivesResultsDataExpirationRule</a>

---


### DataMongodbatlasOnlineArchivesResultsDataProcessRegionList <a name="DataMongodbatlasOnlineArchivesResultsDataProcessRegionList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_online_archives

dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference <a name="DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_online_archives

dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.property.cloudProvider">cloud_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegion">DataMongodbatlasOnlineArchivesResultsDataProcessRegion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_provider`<sup>Required</sup> <a name="cloud_provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.property.cloudProvider"></a>

```python
cloud_provider: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasOnlineArchivesResultsDataProcessRegion
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegion">DataMongodbatlasOnlineArchivesResultsDataProcessRegion</a>

---


### DataMongodbatlasOnlineArchivesResultsList <a name="DataMongodbatlasOnlineArchivesResultsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_online_archives

dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasOnlineArchivesResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasOnlineArchivesResultsOutputReference <a name="DataMongodbatlasOnlineArchivesResultsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_online_archives

dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.archiveId">archive_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.collectionType">collection_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.collName">coll_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.criteria">criteria</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaList">DataMongodbatlasOnlineArchivesResultsCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.dataExpirationRule">data_expiration_rule</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList">DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.dataProcessRegion">data_process_region</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionList">DataMongodbatlasOnlineArchivesResultsDataProcessRegionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.dbName">db_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.partitionFields">partition_fields</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsList">DataMongodbatlasOnlineArchivesResultsPartitionFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.paused">paused</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleList">DataMongodbatlasOnlineArchivesResultsScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResults">DataMongodbatlasOnlineArchivesResults</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `archive_id`<sup>Required</sup> <a name="archive_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.archiveId"></a>

```python
archive_id: str
```

- *Type:* str

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `collection_type`<sup>Required</sup> <a name="collection_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.collectionType"></a>

```python
collection_type: str
```

- *Type:* str

---

##### `coll_name`<sup>Required</sup> <a name="coll_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.collName"></a>

```python
coll_name: str
```

- *Type:* str

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.criteria"></a>

```python
criteria: DataMongodbatlasOnlineArchivesResultsCriteriaList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsCriteriaList">DataMongodbatlasOnlineArchivesResultsCriteriaList</a>

---

##### `data_expiration_rule`<sup>Required</sup> <a name="data_expiration_rule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.dataExpirationRule"></a>

```python
data_expiration_rule: DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList">DataMongodbatlasOnlineArchivesResultsDataExpirationRuleList</a>

---

##### `data_process_region`<sup>Required</sup> <a name="data_process_region" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.dataProcessRegion"></a>

```python
data_process_region: DataMongodbatlasOnlineArchivesResultsDataProcessRegionList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsDataProcessRegionList">DataMongodbatlasOnlineArchivesResultsDataProcessRegionList</a>

---

##### `db_name`<sup>Required</sup> <a name="db_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.dbName"></a>

```python
db_name: str
```

- *Type:* str

---

##### `partition_fields`<sup>Required</sup> <a name="partition_fields" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.partitionFields"></a>

```python
partition_fields: DataMongodbatlasOnlineArchivesResultsPartitionFieldsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsList">DataMongodbatlasOnlineArchivesResultsPartitionFieldsList</a>

---

##### `paused`<sup>Required</sup> <a name="paused" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.paused"></a>

```python
paused: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.schedule"></a>

```python
schedule: DataMongodbatlasOnlineArchivesResultsScheduleList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleList">DataMongodbatlasOnlineArchivesResultsScheduleList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasOnlineArchivesResults
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResults">DataMongodbatlasOnlineArchivesResults</a>

---


### DataMongodbatlasOnlineArchivesResultsPartitionFieldsList <a name="DataMongodbatlasOnlineArchivesResultsPartitionFieldsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_online_archives

dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference <a name="DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_online_archives

dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.property.fieldName">field_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.property.fieldType">field_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.property.order">order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFields">DataMongodbatlasOnlineArchivesResultsPartitionFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_name`<sup>Required</sup> <a name="field_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

---

##### `field_type`<sup>Required</sup> <a name="field_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.property.fieldType"></a>

```python
field_type: str
```

- *Type:* str

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFieldsOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasOnlineArchivesResultsPartitionFields
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsPartitionFields">DataMongodbatlasOnlineArchivesResultsPartitionFields</a>

---


### DataMongodbatlasOnlineArchivesResultsScheduleList <a name="DataMongodbatlasOnlineArchivesResultsScheduleList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_online_archives

dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasOnlineArchivesResultsScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasOnlineArchivesResultsScheduleOutputReference <a name="DataMongodbatlasOnlineArchivesResultsScheduleOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_online_archives

dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.property.dayOfMonth">day_of_month</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.property.dayOfWeek">day_of_week</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.property.endHour">end_hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.property.endMinute">end_minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.property.startHour">start_hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.property.startMinute">start_minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsSchedule">DataMongodbatlasOnlineArchivesResultsSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_of_month`<sup>Required</sup> <a name="day_of_month" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.property.dayOfMonth"></a>

```python
day_of_month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.property.dayOfWeek"></a>

```python
day_of_week: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_hour`<sup>Required</sup> <a name="end_hour" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.property.endHour"></a>

```python
end_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_minute`<sup>Required</sup> <a name="end_minute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.property.endMinute"></a>

```python
end_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_hour`<sup>Required</sup> <a name="start_hour" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.property.startHour"></a>

```python
start_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_minute`<sup>Required</sup> <a name="start_minute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.property.startMinute"></a>

```python
start_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsScheduleOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasOnlineArchivesResultsSchedule
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasOnlineArchives.DataMongodbatlasOnlineArchivesResultsSchedule">DataMongodbatlasOnlineArchivesResultsSchedule</a>

---



