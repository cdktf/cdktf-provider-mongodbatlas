# `data_mongodbatlas_event_triggers`

Refer to the Terraform Registory for docs: [`data_mongodbatlas_event_triggers`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/event_triggers).

# `dataMongodbatlasEventTriggers` Submodule <a name="`dataMongodbatlasEventTriggers` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasEventTriggers <a name="DataMongodbatlasEventTriggers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/event_triggers mongodbatlas_event_triggers}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_event_triggers

dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  app_id: str,
  project_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.Initializer.parameter.appId">app_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/event_triggers#app_id DataMongodbatlasEventTriggers#app_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/event_triggers#project_id DataMongodbatlasEventTriggers#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/event_triggers#id DataMongodbatlasEventTriggers#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.Initializer.parameter.appId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/event_triggers#app_id DataMongodbatlasEventTriggers#app_id}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/event_triggers#project_id DataMongodbatlasEventTriggers#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/event_triggers#id DataMongodbatlasEventTriggers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.isConstruct"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_event_triggers

dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_event_triggers

dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_event_triggers

dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.results">results</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsList">DataMongodbatlasEventTriggersResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.appIdInput">app_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.appId">app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `results`<sup>Required</sup> <a name="results" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.results"></a>

```python
results: DataMongodbatlasEventTriggersResultsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsList">DataMongodbatlasEventTriggersResultsList</a>

---

##### `app_id_input`<sup>Optional</sup> <a name="app_id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.appIdInput"></a>

```python
app_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.appId"></a>

```python
app_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggers.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasEventTriggersConfig <a name="DataMongodbatlasEventTriggersConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_event_triggers

dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  app_id: str,
  project_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersConfig.property.appId">app_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/event_triggers#app_id DataMongodbatlasEventTriggers#app_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/event_triggers#project_id DataMongodbatlasEventTriggers#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/event_triggers#id DataMongodbatlasEventTriggers#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersConfig.property.appId"></a>

```python
app_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/event_triggers#app_id DataMongodbatlasEventTriggers#app_id}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/event_triggers#project_id DataMongodbatlasEventTriggers#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/event_triggers#id DataMongodbatlasEventTriggers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataMongodbatlasEventTriggersResults <a name="DataMongodbatlasEventTriggersResults" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResults.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_event_triggers

dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResults()
```


### DataMongodbatlasEventTriggersResultsEventProcessors <a name="DataMongodbatlasEventTriggersResultsEventProcessors" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessors.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_event_triggers

dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessors()
```


### DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridge <a name="DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridge" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridge"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridge.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_event_triggers

dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridge()
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList <a name="DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_event_triggers

dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference <a name="DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_event_triggers

dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.property.configAccountId">config_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.property.configRegion">config_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridge">DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridge</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `config_account_id`<sup>Required</sup> <a name="config_account_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.property.configAccountId"></a>

```python
config_account_id: str
```

- *Type:* str

---

##### `config_region`<sup>Required</sup> <a name="config_region" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.property.configRegion"></a>

```python
config_region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridge
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridge">DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridge</a>

---


### DataMongodbatlasEventTriggersResultsEventProcessorsList <a name="DataMongodbatlasEventTriggersResultsEventProcessorsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_event_triggers

dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference <a name="DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_event_triggers

dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.property.awsEventbridge">aws_eventbridge</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList">DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessors">DataMongodbatlasEventTriggersResultsEventProcessors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_eventbridge`<sup>Required</sup> <a name="aws_eventbridge" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.property.awsEventbridge"></a>

```python
aws_eventbridge: DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList">DataMongodbatlasEventTriggersResultsEventProcessorsAwsEventbridgeList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasEventTriggersResultsEventProcessors
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessors">DataMongodbatlasEventTriggersResultsEventProcessors</a>

---


### DataMongodbatlasEventTriggersResultsList <a name="DataMongodbatlasEventTriggersResultsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_event_triggers

dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasEventTriggersResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasEventTriggersResultsOutputReference <a name="DataMongodbatlasEventTriggersResultsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_event_triggers

dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.configCollection">config_collection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.configDatabase">config_database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.configFullDocument">config_full_document</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.configFullDocumentBefore">config_full_document_before</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.configMatch">config_match</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.configOperationType">config_operation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.configOperationTypes">config_operation_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.configProject">config_project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.configProviders">config_providers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.configSchedule">config_schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.configScheduleType">config_schedule_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.configServiceId">config_service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.disabled">disabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.eventProcessors">event_processors</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsList">DataMongodbatlasEventTriggersResultsEventProcessorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.functionId">function_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.functionName">function_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.triggerId">trigger_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.unordered">unordered</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResults">DataMongodbatlasEventTriggersResults</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `config_collection`<sup>Required</sup> <a name="config_collection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.configCollection"></a>

```python
config_collection: str
```

- *Type:* str

---

##### `config_database`<sup>Required</sup> <a name="config_database" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.configDatabase"></a>

```python
config_database: str
```

- *Type:* str

---

##### `config_full_document`<sup>Required</sup> <a name="config_full_document" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.configFullDocument"></a>

```python
config_full_document: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `config_full_document_before`<sup>Required</sup> <a name="config_full_document_before" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.configFullDocumentBefore"></a>

```python
config_full_document_before: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `config_match`<sup>Required</sup> <a name="config_match" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.configMatch"></a>

```python
config_match: str
```

- *Type:* str

---

##### `config_operation_type`<sup>Required</sup> <a name="config_operation_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.configOperationType"></a>

```python
config_operation_type: str
```

- *Type:* str

---

##### `config_operation_types`<sup>Required</sup> <a name="config_operation_types" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.configOperationTypes"></a>

```python
config_operation_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `config_project`<sup>Required</sup> <a name="config_project" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.configProject"></a>

```python
config_project: str
```

- *Type:* str

---

##### `config_providers`<sup>Required</sup> <a name="config_providers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.configProviders"></a>

```python
config_providers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `config_schedule`<sup>Required</sup> <a name="config_schedule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.configSchedule"></a>

```python
config_schedule: str
```

- *Type:* str

---

##### `config_schedule_type`<sup>Required</sup> <a name="config_schedule_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.configScheduleType"></a>

```python
config_schedule_type: str
```

- *Type:* str

---

##### `config_service_id`<sup>Required</sup> <a name="config_service_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.configServiceId"></a>

```python
config_service_id: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.disabled"></a>

```python
disabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `event_processors`<sup>Required</sup> <a name="event_processors" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.eventProcessors"></a>

```python
event_processors: DataMongodbatlasEventTriggersResultsEventProcessorsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsEventProcessorsList">DataMongodbatlasEventTriggersResultsEventProcessorsList</a>

---

##### `function_id`<sup>Required</sup> <a name="function_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.functionId"></a>

```python
function_id: str
```

- *Type:* str

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `trigger_id`<sup>Required</sup> <a name="trigger_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.triggerId"></a>

```python
trigger_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `unordered`<sup>Required</sup> <a name="unordered" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.unordered"></a>

```python
unordered: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResultsOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasEventTriggersResults
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTriggers.DataMongodbatlasEventTriggersResults">DataMongodbatlasEventTriggersResults</a>

---



