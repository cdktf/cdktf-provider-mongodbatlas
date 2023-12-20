# `dataMongodbatlasDatabaseUsers` Submodule <a name="`dataMongodbatlasDatabaseUsers` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasDatabaseUsers <a name="DataMongodbatlasDatabaseUsers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/database_users mongodbatlas_database_users}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_database_users

dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/database_users#project_id DataMongodbatlasDatabaseUsers#project_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/database_users#project_id DataMongodbatlasDatabaseUsers#project_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataMongodbatlasDatabaseUsers resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.isConstruct"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_database_users

dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_database_users

dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_database_users

dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_database_users

dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataMongodbatlasDatabaseUsers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataMongodbatlasDatabaseUsers to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataMongodbatlasDatabaseUsers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/database_users#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasDatabaseUsers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.property.results">results</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsList">DataMongodbatlasDatabaseUsersResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `results`<sup>Required</sup> <a name="results" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.property.results"></a>

```python
results: DataMongodbatlasDatabaseUsersResultsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsList">DataMongodbatlasDatabaseUsersResultsList</a>

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsers.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasDatabaseUsersConfig <a name="DataMongodbatlasDatabaseUsersConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_database_users

dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/database_users#project_id DataMongodbatlasDatabaseUsers#project_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/database_users#project_id DataMongodbatlasDatabaseUsers#project_id}.

---

### DataMongodbatlasDatabaseUsersResults <a name="DataMongodbatlasDatabaseUsersResults" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResults.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_database_users

dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResults()
```


### DataMongodbatlasDatabaseUsersResultsLabels <a name="DataMongodbatlasDatabaseUsersResultsLabels" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabels.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_database_users

dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabels()
```


### DataMongodbatlasDatabaseUsersResultsRoles <a name="DataMongodbatlasDatabaseUsersResultsRoles" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRoles.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_database_users

dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRoles()
```


### DataMongodbatlasDatabaseUsersResultsScopes <a name="DataMongodbatlasDatabaseUsersResultsScopes" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopes.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_database_users

dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopes()
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasDatabaseUsersResultsLabelsList <a name="DataMongodbatlasDatabaseUsersResultsLabelsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_database_users

dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasDatabaseUsersResultsLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasDatabaseUsersResultsLabelsOutputReference <a name="DataMongodbatlasDatabaseUsersResultsLabelsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_database_users

dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabels">DataMongodbatlasDatabaseUsersResultsLabels</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasDatabaseUsersResultsLabels
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabels">DataMongodbatlasDatabaseUsersResultsLabels</a>

---


### DataMongodbatlasDatabaseUsersResultsList <a name="DataMongodbatlasDatabaseUsersResultsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_database_users

dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasDatabaseUsersResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasDatabaseUsersResultsOutputReference <a name="DataMongodbatlasDatabaseUsersResultsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_database_users

dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.property.authDatabaseName">auth_database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.property.awsIamType">aws_iam_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.property.labels">labels</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsList">DataMongodbatlasDatabaseUsersResultsLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.property.ldapAuthType">ldap_auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.property.oidcAuthType">oidc_auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.property.roles">roles</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesList">DataMongodbatlasDatabaseUsersResultsRolesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.property.scopes">scopes</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesList">DataMongodbatlasDatabaseUsersResultsScopesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.property.x509Type">x509_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResults">DataMongodbatlasDatabaseUsersResults</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_database_name`<sup>Required</sup> <a name="auth_database_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.property.authDatabaseName"></a>

```python
auth_database_name: str
```

- *Type:* str

---

##### `aws_iam_type`<sup>Required</sup> <a name="aws_iam_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.property.awsIamType"></a>

```python
aws_iam_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.property.labels"></a>

```python
labels: DataMongodbatlasDatabaseUsersResultsLabelsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsLabelsList">DataMongodbatlasDatabaseUsersResultsLabelsList</a>

---

##### `ldap_auth_type`<sup>Required</sup> <a name="ldap_auth_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.property.ldapAuthType"></a>

```python
ldap_auth_type: str
```

- *Type:* str

---

##### `oidc_auth_type`<sup>Required</sup> <a name="oidc_auth_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.property.oidcAuthType"></a>

```python
oidc_auth_type: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.property.roles"></a>

```python
roles: DataMongodbatlasDatabaseUsersResultsRolesList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesList">DataMongodbatlasDatabaseUsersResultsRolesList</a>

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.property.scopes"></a>

```python
scopes: DataMongodbatlasDatabaseUsersResultsScopesList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesList">DataMongodbatlasDatabaseUsersResultsScopesList</a>

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `x509_type`<sup>Required</sup> <a name="x509_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.property.x509Type"></a>

```python
x509_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasDatabaseUsersResults
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResults">DataMongodbatlasDatabaseUsersResults</a>

---


### DataMongodbatlasDatabaseUsersResultsRolesList <a name="DataMongodbatlasDatabaseUsersResultsRolesList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_database_users

dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasDatabaseUsersResultsRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasDatabaseUsersResultsRolesOutputReference <a name="DataMongodbatlasDatabaseUsersResultsRolesOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_database_users

dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.property.collectionName">collection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.property.roleName">role_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRoles">DataMongodbatlasDatabaseUsersResultsRoles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `collection_name`<sup>Required</sup> <a name="collection_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.property.collectionName"></a>

```python
collection_name: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRolesOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasDatabaseUsersResultsRoles
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsRoles">DataMongodbatlasDatabaseUsersResultsRoles</a>

---


### DataMongodbatlasDatabaseUsersResultsScopesList <a name="DataMongodbatlasDatabaseUsersResultsScopesList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_database_users

dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasDatabaseUsersResultsScopesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasDatabaseUsersResultsScopesOutputReference <a name="DataMongodbatlasDatabaseUsersResultsScopesOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_database_users

dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopes">DataMongodbatlasDatabaseUsersResultsScopes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopesOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasDatabaseUsersResultsScopes
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasDatabaseUsers.DataMongodbatlasDatabaseUsersResultsScopes">DataMongodbatlasDatabaseUsersResultsScopes</a>

---



